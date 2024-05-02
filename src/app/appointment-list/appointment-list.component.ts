import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  
  title: string = "Todo list";
  
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  ngOnInit(): void {
    const savedAppointments = localStorage.getItem("appointments");

    this.appointments = savedAppointments ?
      JSON.parse(savedAppointments) : [];
  }

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

      this.updateAppointments();
    }
  }

  deleteAppointment(indedx: number) {
    this.appointments.splice(indedx, 1);

    this.updateAppointments();
  }

  private updateAppointments() {
    localStorage.setItem("appointments", JSON.stringify(
      this.appointments,
      null,
      2
    ));
  }
}
