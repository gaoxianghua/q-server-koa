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

class ProductUpdate extends Model {

}

ProductUpdate.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  p_code_old: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '原产品序列号'
  },
  p_code_new: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '原产品序列号'
  },
},
merge(
  {
    sequelize,
    tableName: 'products_update',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { ProductUpdate }