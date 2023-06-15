import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Appointment } from '../entityes/Appointment.entity';
import { AppointmentService } from './appointment.service';

@Controller('appointments')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

 

  @Get()
  async getAll(): Promise<Appointment[]> {
    return this.appointmentService.getAll();
  }

}
