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
} from 'lin-mizar';

class Customer extends Model {

}

Customer.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  phone: {
    type: Sequelize.STRING({length: 11}),
    allowNull: false,
    comment: '用户手机号'
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '用户名'
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
    tableName: 'customers',
    modelName: 'customer_manage'
  },
  InfoCrudMixin.options
)
)

export { Customer }