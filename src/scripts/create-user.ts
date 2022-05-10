// 3p
import { hashPassword } from '@foal/core';
import { createConnection } from 'typeorm';

// App
import { User } from '../app/entities';

export const schema = {
  additionalProperties: false,
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string' },
    fullname: {type: 'string'},
    address: {type: 'string'},
    phonenumber: {type: 'string'}
  },
  required: ['email', 'password', 'fullname'],
  type: 'object',
};

export async function main(args) {
  const connection = await createConnection();

  try {
    const user = new User();
    user.email = args.email;
    user.password = await hashPassword(args.password);
    user.activated = false;
    user.datelastlogin = new Date().toLocaleDateString();
    user.fullname = args.fullname;
    user.address = args.address;
    user.phonenumber= args.phonenumber;

    console.log(await user.save());
  } catch (error) {
    console.log(error);
  } finally {
    await connection.close();
  }
}
