/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', email: 'email1@gmail.com', role: 'ADMIN' },
    { id: 2, name: 'Jane Doe', email: 'email2@gmail.com', role: 'ENGINEER' },
    { id: 3, name: 'John Smith', email: 'email3@gmail.com', role: 'INTERN' },
    {
      id: 4,
      name: 'Alice Smith',
      email: 'email4@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      email: 'email6@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 7,
      name: 'Michael Brown',
      email: 'email7@gmail.com',
      role: 'ENGINEER',
    },
    { id: 8, name: 'Emily Davis', email: 'email8@gmail.com', role: 'INTERN' },
    {
      id: 9,
      name: 'David Wilson',
      email: 'email9@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 10,
      name: 'Olivia Taylor',
      email: 'email10@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 11,
      name: 'James Anderson',
      email: 'email11@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 12,
      name: 'Sophia Martinez',
      email: 'email12@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 13,
      name: 'Daniel Clark',
      email: 'email13@gmail.com',
      role: 'INTERN',
    },
    {
      id: 14,
      name: 'Ava Rodriguez',
      email: 'email14@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 15,
      name: 'Logan Lee',
      email: 'email15@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Bob Johnson',
      email: 'email5@gmail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray.length === 0) {
        throw new NotFoundException(`No user with role ${role} found`);
      }
      return roleArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id)
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  create(createUsersDto: CreateUsersDto) {
    const newUser = { id: this.users.length + 1, ...createUsersDto };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUsersDto: UpdateUsersDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex] = { ...this.users[userIndex], ...updateUsersDto };
    return this.users[userIndex];
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    const deletedUser = this.users[userIndex];
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
