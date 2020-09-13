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

class WorkSheet extends Model {

}

WorkSheet.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ws_code: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '工单编号'
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户id'
  },
  user_type: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '用户类型'
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '工单状态'
  },
  source: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '工单来源'
  },
  category: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '问题分类'
  },
  created_by: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '创建人'
  },
  follow_time: {
    type: Sequelize.DATE,
    allowNull: false,
    comment: '跟进时间'
  },
  processed_by: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '处理人'
  },
  processed_group: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '处理组'
  },
  finish_time: {
    type: Sequelize.DATE,
    allowNull: true,
    comment: '完成时间'
  }
},
merge(
  {
    sequelize,
    tableName: 'worksheets',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { WorkSheet }