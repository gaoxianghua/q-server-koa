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

class LogAction extends Model {

}

LogAction.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ws_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    comment: '工单id'
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  action: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '用户行为'
  }
},
merge(
  {
    sequelize,
    tableName: 'log_action',
    modelName: 'log'
  },
  InfoCrudMixin.options
)
)

export { LogAction }