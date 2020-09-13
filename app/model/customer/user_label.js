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

class Userlabel extends Model {

}

Userlabel.init({
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
  label_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户标签id'
  }
},
merge(
  {
    sequelize,
    tableName: 'user_labels',
    modelName: 'user_manage'
  },
  InfoCrudMixin.options
)
)

export { Userlabel }