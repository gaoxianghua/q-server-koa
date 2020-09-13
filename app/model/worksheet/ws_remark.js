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

class WSRemark extends Model {

}

WSRemark.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  action_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '行为id'    
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '备注内容'
  },
  addedBy: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '备注人'
  }
},
merge(
  {
    sequelize,
    tableName: 'ws_remark',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { WSRemark }