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

class ClientInfo extends Model {

}

ClientInfo.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  user_type: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户类型' //0--会员 1--来电客户
  },
  source: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户来源'
  },
  category: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户分类'
  },
  product_num: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '产品注册数量'
  },
  repair_times: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '名下所有产品的维修次数'
  },
  label: {
    type: Sequelize.STRING,
    //allowNull: false,
    comment: '标签'
  }
},
merge(
  {
    sequelize,
    tableName: 'client_infos',
    modelName: 'customer_manage'
  },
  InfoCrudMixin.options
)
)

export { ClientInfo }