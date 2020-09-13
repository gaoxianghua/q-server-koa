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

class ProductDefect extends Model {

}

ProductDefect.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  p_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '产品序列号'
  },
  p_code: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '产品序列号'
  },
  defect_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '缺陷id'
  }
},
merge(
  {
    sequelize,
    tableName: 'product_defect',
    modelName: 'worksheet'
  },
  InfoCrudMixin.options
)
)

export { ProductDefect }