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

class Defect extends Model {

}

Defect.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '缺陷描述'
  }
},
merge(
  {
    sequelize,
    tableName: 'product_defect',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { Defect }