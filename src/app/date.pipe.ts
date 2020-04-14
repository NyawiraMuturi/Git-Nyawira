import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd'): string {
    date = new Date(date); 
    date.setDate(date.getDate() - day);
    return;
  }

}

