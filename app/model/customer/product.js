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

class Product extends Model {

}

Product.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  owner_id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '拥有者id'
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '使用人id'
  },
  p_code: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '产品序列号'
  },
  p_type: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '产品类型'
  },
  isRegister: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    comment: '是否注册'
  }
},
 merge(
    {
      sequelize,
      tableName: 'products',
      modelName: 'customer_manage'
    },
    InfoCrudMixin.options
  )
)

export { Product }