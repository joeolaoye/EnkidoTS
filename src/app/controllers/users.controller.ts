import { Context, Get, hashPassword, HttpResponseCreated, HttpResponseNotFound, HttpResponseOK, Post, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';
import { User } from '../entities';

export class UsersController {

  schema = {
    additionalProperties: false,
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
      fullname: { type: 'string' },
      address: {type: 'string'},
      phonenumber: {type: 'integer'}
    },
    required: ['email', 'password', 'fullname'],
    type: 'object'
  };

  @Get('/')
  @ValidateQueryParam('page', { type: 'number' }, { required: false })
  async getAllUsers(ctx: Context) {
    let page = ctx.request.query.page as number | undefined;
    if (page === undefined) {
      page = 1;
    }

    const pagesize = 10;
    const take = pagesize;
    const skip = (page - 1) * pagesize;

    const queryBuilder = User.createQueryBuilder('users')
      .select()
      .skip(skip)
      .take(take);
    const users = await queryBuilder.getMany();
    return new HttpResponseOK(users);
  }

  @Get('/:id')
  @ValidatePathParam('id', { type: 'number' })
  async getUserByID(ctx: Context) {
    const id = ctx.request.params.id;
    const user = await User.findOne({ id: id });
    if (!user) {
      return new HttpResponseNotFound();
    }
    else {
      return new HttpResponseOK(user);
    }
  }

  @Post('/')
  @ValidateBody(controller => controller.schema)
  async postUser(ctx: Context) {

    const user = new User();
    user.email = ctx.request.body.email;
    user.password = await hashPassword(ctx.request.body.password);
    user.activated = false;
    user.datelastlogin = new Date().toLocaleDateString();
    user.fullname = ctx.request.body.fullname;
    user.address = ctx.request.body.address;
    user.phonenumber = ctx.request.body.phonenumber;

    await User.save(user);
    return new HttpResponseCreated(user);

  }
}



