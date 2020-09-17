import { getTokens } from 'lin-mizar';
import {
  RegisterValidator,
  LoginValidator,
  UpdateInfoValidator,
  ChangePasswordValidator,
  GetUsersValidator
} from '../validator/user';


import {UserIdentityModel, UserModel} from '../model/account/user';
import { UserDao } from '../dao/user';
import { RepeatException, generate, NotFound, Forbidden } from 'lin-mizar';

class UserController {

  static async login(ctx) {
    const v = await new LoginValidator().validate(ctx);
    const user = await UserIdentityModel.verify(
      v.get('body.username'),
      v.get('body.password')
    );
    const { accessToken, refreshToken } = getTokens({
      id: user.user_id
    });
    ctx.json({
      access_token: accessToken,
      refresh_token: refreshToken
    });
  }

  /*
  *创建用户
  * 
  * */
  static async createAccount(ctx) {
    const v = await new RegisterValidator().validate(ctx);
   
    let user = await UserModel.findOne({
      where: {
        email: v.get('body.email')
      }
    });
    
    if (user) {
      throw new RepeatException({
        code: 10076
      });
    }
    const userDao = new UserDao();
    const registerResult = await userDao.createUser(v);
    if(registerResult){
      ctx.success({
        code: 11
      });
    }else{
      throw new RepeatException({
        code: 10200
      });
    }
   
  }
  /*
  *账号列表
  *参数：group_id,page,count
  */
 static async getAccounts(ctx){
  const v = await new GetUsersValidator().validate(ctx);
  const userDao = new UserDao();
  const { users, total } = await userDao.getUsers(
    v.get('body.group_id'),
    v.get('body.page'),
    v.get('body.count')
  );
  ctx.json({
    items: users,
    total,
    count:v.get('body.count'),
    page:v.get('body.page')
  });
 }

 /**
  * 更新账户信息
  * @param {*} ctx 
  */

  static async editAccount(ctx) {
    const v = await new UpdateInfoValidator().validate(ctx);
    const userDao = new UserDao();
    await userDao.updateUser(ctx, v);
    ctx.success({
      code: 6
    });
  }

  static async changeAccount(ctx) {}

  static async resetPassword(ctx) {}

  static async modifyPassword(ctx) {}

}

export { UserController }