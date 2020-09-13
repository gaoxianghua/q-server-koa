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

class WSProduct extends Model {

}

WSProduct.init({
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
  p_code: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '产品序列号'
  },  
},
merge(
  {
    sequelize,
    tableName: 'ws_products',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { WSProduct }