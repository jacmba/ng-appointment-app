import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  title: string = "Todo list";
  
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      const newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      this.appointments.push(newAppointment);
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";
    }
  }

  deleteAppointment(indedx: number) {
    this.appointments.splice(indedx, 1);
  }
}
