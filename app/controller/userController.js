import { getTokens } from 'lin-mizar';
import {
  RegisterValidator,
  LoginValidator,
  UpdateInfoValidator,
  ChangePasswordValidator
} from '../validator/user';
import { UserDao } from '../dao/user';

import {UserIdentityModel, UserModel} from '../model/account/user';

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

  static async getAccounts(ctx) {}

  static async createAccount(ctx) {
    const v = await new RegisterValidator().validate(ctx);
   
    let user = await UserModel.findOne({
      where: {
        username: v.get('body.username')
      }
    });
    
    if (user) {
      throw new RepeatException({
        code: 10071
      });
    }
    const userDao = new UserDao();
    const value_test= await userDao.createUser(v);
    console.log(value_test);
    ctx.success({
      code: 11
    });

  }

  static async editAccount(ctx) {}

  static async changeAccount(ctx) {}

  static async resetPassword(ctx) {}

  static async modifyPassword(ctx) {}

}

export { UserController }