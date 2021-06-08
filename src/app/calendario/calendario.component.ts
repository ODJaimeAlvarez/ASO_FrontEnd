import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarView } from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})

export class CalendarioComponent {

  constructor() { }

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;

  setView(view: CalendarView) {
    this.view = view;
  }//setView

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }//closeOpenMonthViewDay
}
