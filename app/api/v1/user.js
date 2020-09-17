import { LinRouter, NotFound, disableLoading } from 'lin-mizar';
import { groupRequired, loginRequired } from '../../middleware/jwt';
import { UserController } from '../../controller/userController'

//user 路由实例
const userApi = new LinRouter({
  prefix: '/v1/users',
  module: '用户'
});

/* 用户登录
param：
account
password
------------------------------------------
return:
{
  access_token:
  refresh_token:
}
*/
userApi.linPost('userLogin',
                   '/login',
                   userApi.permission('登录'),
                   UserController.login);

/* 获取账号列表
param：
?page=xx&&size=xx
------------------------------------------
return:
[
  {
    id:
    name:
    phone:
    email:
    role:
    create_time:
  },
  ...
]
*/
userApi.linGet('getAccounts',
                '/',
                userApi.permission('获取账户列表'),
                groupRequired,
                UserController.getAccounts);
/* 创建账户
param：
{
  account:
  phone:
  name:
  role:
}
------------------------------------------
return:
{
  code: 1,
  msg: '创建成功'
}
*/
userApi.linPost('createAccount',
                  '/',
                  userApi.permission('创建账户'),
                  groupRequired,
                  UserController.createAccount)
/* 账户编辑
param：
{
  account:
  phone:
  name:
  role:
}
------------------------------------------
return:
{
  phone:
  name:
  role:
}
*/
userApi.linPatch('editAccount',
                  '/',
                  userApi.permission('编辑账户'),
                  groupRequired,
                  UserController.editAccount)
/* 账户开启/关闭
param：
{
  account:
  status:
}
------------------------------------------
return:
{
  code: 
  msg:
}
*/
userApi.linPost('changeAccount',
                '/change',
                userApi.permission('开关账户'),
                groupRequired,
                UserController.changeAccount)
/* 账户密码重置
param：
{
  account:
}
------------------------------------------
return:
{
  code: 
  msg:
}
*/
userApi.linPost('resetPassword',
                  '/password/reset',
                  userApi.permission('密码重置'),
                  groupRequired,
                  UserController.resetPassword)
/* 账户密码修改
param：
{
  old_password,
  new_password
}
------------------------------------------
return:
{
  code: 
  msg:
}
*/
userApi.linPost('modifyPassword',
                '/password/modify',
                userApi.permission('密码修改'),
                loginRequired,
                UserController.modifyPassword)

export { userApi }