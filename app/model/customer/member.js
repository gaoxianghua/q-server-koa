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

class Member extends Model {

}

Member.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  account: {
    type: Sequelize.STRING({length: 11}),
    allowNull: false,
    comment: '用户账号'
  },
  password: {
    type: Sequelize.STRING({ length: 100 }),
    allowNull: false,
    comment: '密码'
  },
  user_name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '用户名'
  },
  gender: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '性别'
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
  },
  open_id: {
    type: Sequelize.STRING({ length: 100 }),
    comment: '微信open_id'
  },
  union_id: {
    type: Sequelize.STRING({ length: 100 }),
    comment: '微信union_id'
  }
},
merge(
    {
      sequelize,
      tableName: 'members',
      modelName: 'customer_manage'
    },
    InfoCrudMixin.options
  )
)

export { Member }