import { hashPassword } from '@foal/core';
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column()
  address: string;

  @Column()
  phonenumber: string;

  @Column()
  activated: boolean;

  @CreateDateColumn()
  datecreated;

  @UpdateDateColumn()
  dateupdated;

  @DeleteDateColumn()
  datedeleted;

  @Column({ type: 'datetime' })
  datelastlogin;

  async setPassword(password: string) {
    this.password = await hashPassword(password);
  }

}
