//  src/app/components/calendar/calendar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthViewComponent } from '../month-view/month-view.component';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [CommonModule, MonthViewComponent],
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
    currentDate = new Date();

    changeMonth(offset: number) {
        this.currentDate = new Date(
            this.currentDate.setMonth(this.currentDate.getMonth() + offset)
        );
    }
}

// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-calendar',
//   imports: [],
//   templateUrl: './calendar.component.html',
//   styleUrl: './calendar.component.css'
// })
// export class CalendarComponent {
//
// }
