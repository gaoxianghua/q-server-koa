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

class ProductUser extends Model {

}

ProductUser.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  p_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.INTEGER,
  },
  phone: {
    type: Sequelize.STRING({length: 11}),
  },
  province: {
    type: Sequelize.STRING,
    comment: '省'
  },
  city: {
    type: Sequelize.STRING,
    comment: '市'
  },
  district: {
    type: Sequelize.STRING,
    comment: '区'
  }
}, 
  merge(
    {
      sequelize,
      tableName: 'product_users',
      modelName: 'customer_manage'
    },
    InfoCrudMixin.options
  )
)

export { ProductUser }