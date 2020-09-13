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

class Treatment extends Model {

}

Treatment.init({
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '关联的用户id'
  },
  age: {
    type: Sequelize.INTEGER,
    //allowNull: false,
    comment: '关联的用户年龄'
  },
  gender: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '性别'
  },
  treat_time: {
    type: Sequelize.DATE,
    //allowNull: false,
    comment: '治疗时间'
  },
  disease_type: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: '糖尿病类型'
  },
  inject_time: {
    type: Sequelize.DATE,
    allowNull: false,
    comment: '注射时间'
  },
  use_time:{
    type: Sequelize.DATE,
    //allowNull: false,
    comment: '无针使用时间'
  },
  insulin_name: {
    type: Sequelize.STRING,
    //allowNull: false,
    comment: '胰岛素名称'
  },
  inject_times: {
    type: Sequelize.INTEGER,
    //allowNull: false,
    comment: '注射次数'
  },
  inject_dose: {
    type: Sequelize.STRING,
    //allowNull: false,
    comment: '每次注射剂量'
  },
  fbg_value: {
    type: Sequelize.INTEGER,
    //allowNull: false,
    comment: '空腹血糖'
  },
  pbg_value: {
    type: Sequelize.INTEGER,
    //allowNull: false,
    comment: '餐后血糖'
  },
  nbg_value: {
    type: Sequelize.INTEGER,
    //allowNull: false,
    comment: '夜间血糖'
  },
  hasComplication: {
    type: Sequelize.BOOLEAN,
    //allowNull: false,
    comment: '是否有并发症'
  },
  hasAnticoagulants: {
    type: Sequelize.BOOLEAN,
    //allowNull: false,
    comment: '是否服用抗凝药'
  },
  hasHarden: {
    type: Sequelize.BOOLEAN,
    //allowNull: false,
    comment: '有无硬结'
  },
  hba1c_value: {
    type: Sequelize.INTEGER,
    //allowNull: false,
    comment: '糖化血红蛋白'
  },
  hasMedicine: {
    type: Sequelize.BOOLEAN,
    //allowNull: false,
    comment: '有无口服降糖药'
  },
  c_value: {
    type: Sequelize.INTEGER,
    //allowNull: false,
    comment: 'c肽值'
  }
},
merge(
  {
    sequelize,
    tableName: 'treatments',
    modelName: 'customer_manage'
  },
  InfoCrudMixin.options
)
)