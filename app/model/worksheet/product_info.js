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

class ProductInfo extends Model {

}

ProductInfo.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  p_code: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '产品序列号'
  },
  buy_channel: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '购买渠道'
  },
  agent: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '归属经销商'
  },
  batch_no: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '批次号'
  }
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

export { ProductInfo }