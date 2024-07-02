import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: '1',
      password: '1',
      role: 'user 1'
    },
    {
      userId: 2,
      username: '2',
      password: '2',
      role: 'user 2'
    },
    {
      userId: 3,
      username: '3',
      password: '3',
      role: 'user 3'
    },
    {
      userId: 4,
      username: '4',
      password: '4',
      role: 'user 4'
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }

  async findAll(): Promise<User[] | undefined> {
    return this.users.map(u => ({username: u.username, auth: false}))
  }

}
