// src/app/app.component.ts

import { Component } from '@angular/core';
import { CalendarComponent } from './components/calendar/calendar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CalendarComponent],
    template: '<app-calendar></app-calendar>',
    styleUrls: ['./app.component.css'],
})
export class AppComponent { }


// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'event-calendar';
// }
