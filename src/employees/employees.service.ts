import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeCreateInput) {
    return this.databaseService.employe.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.databaseService.employe.findMany({
        where: { role },
      });
    }
    return this.databaseService.employe.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.employe.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeUpdateInput) {
    return this.databaseService.employe.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.employe.delete({
      where: { id },
    });
  }
}
