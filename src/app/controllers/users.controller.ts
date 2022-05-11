import { Context, Get, HttpResponseOK, ValidatePathParam, ValidateQueryParam } from '@foal/core';
import { User } from '../entities';

export class UsersController {

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
    const id = ctx.request.path;
    

    const queryBuilder = User.createQueryBuilder('users')
      .select();
    const users = await queryBuilder.getMany();
    return new HttpResponseOK(users);
  }

}
