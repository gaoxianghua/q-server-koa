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

class WorksheetInfo extends Model {

}

WorksheetInfo.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ws_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '工单id'
  },
  repair_times: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '工单对应产品的维修次数'
  }
},
merge(
  {
    sequelize,
    tableName: 'worksheet_info',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { WorksheetInfo }