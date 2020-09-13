import { Model, Sequelize } from 'sequelize'
import sequelize from '../../lib/db'
import { get, has, unset, merge } from 'lodash'
import {
  NotFound,
  verify,
  AuthFailed,
  generate,
  Failed,
  config,
  InfoCrudMixin
} from 'lin-mizar'

class WSCategory extends Model {
  
}

WSCategory.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  parent_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '父级id'
  },
  category_name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '分类名称'
  }
},
merge(
  {
    sequelize,
    tableName: 'ws_category',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { WSCategory }