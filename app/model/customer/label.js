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

class Label extends Model {

}

Label.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '标签内容'
  }
  /* color: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '标签颜色'
  } */
},
merge(
  {
    sequelize,
    tableName: 'labels',
    modelName: 'customer_manage'
  },
  InfoCrudMixin.options
)
)

export { Label }