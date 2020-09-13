import { LinRouter, NotFound, disableLoading } from 'lin-mizar';
import { groupRequired, loginRequired } from '../../middleware/jwt';
import { CustomerController } from '../../controller/customerController'

//user 路由实例
const customerApi = new LinRouter({
  prefix: '/v1/customers',
  module: '客户'
});

/* 创建客户（来电客户）
param：
[
  {
    phone:
    user_name:
    provice:
    city:
    district:
  },
  ...
]
------------------------------------------
return:
{
  code:
  msg:
}
*/
customerApi.linPost('createCustomer',
                    '/',
                    customerApi.permission('客户创建'),
                    groupRequired,
                    CustomerController.createCustomer)
/* 为客户（非会员）添加产品
param：
{
  p_id:
  p_type:
  name:
  phone:
  provice:
  city:
  district:
}
------------------------------------------
return:
{
  code:
  msg:
}
*/
customerApi.linPost('addProduct',
                    '/:uid/products/add',
                    customerApi.permission('添加产品'),
                    groupRequired,
                    CustomerController.addProduct)
/* 为客户编辑产品
param：
{
  name:
  phone:
  provice:
  city:
  district:
}
------------------------------------------
return:
{
  code:
  msg:
}
*/
customerApi.linPatch('editProduct',
                      '/:uid/products/:pid',
                      customerApi.permission('编辑产品'),
                      groupRequired,
                      CustomerController.editProduct)
/* 修改客户分类、标签
param：
{
  category:
  label:[]
}
------------------------------------------
return:
{
  code:
  msg:
}
*/
customerApi.linPut('editCustomer',
                      '/:type/:uid',
                      customerApi.permission('修改客户信息'),
                      groupRequired,
                      CustomerController.editCustomer)
/* 获取客户标签
param：
------------------------------------------
return:
[
  {
    id:
    desc:
  },
  ...
]
*/
customerApi.linGet('getCustomerLabels',
                    '/:type/:uid/labels',
                    customerApi.permission('获取客户标签'),
                    groupRequired,
                    CustomerController.getlabels)
/* 查询客户列表（注册会员+来电客户）
param：
?page=xx&&page_size=xx&&phone=xx&&source=xx&&name=xx&&category=xx&&label=xx&&start_time=xx&&end_time=xx
------------------------------------------
return:
[
  {
    id:
    user_id:
    user_type:
    name:    
    phone:
    source:      
    category:
    register_time:
    product_num:
    repair_times:
    label:
  },
  ...
]
*/
customerApi.linGet('queryCustomers',
                    '/',
                    customerApi.permission('查询客户信息'),
                    groupRequired,
                    CustomerController.queryCustomers)
/* 获取客户产品列表
param：
------------------------------------------
return:
[
  {
    p_type:
    p_code:
    register_time:
    name:
    phone:
    provice:
    city:
    district:
  },
  ...
]
*/
customerApi.linGet('getProducts',
                    '/:type/:uid/products',
                    customerApi.permission('获取客户产品列表'),
                    groupRequired,
                    CustomerController.getProducts)

module.exports = { customerApi, [disableLoading]: false }
