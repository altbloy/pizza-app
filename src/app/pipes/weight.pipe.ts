import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 1000) {
      return (value / 1000) + ' кг.'
    }
    else return value + ' грамм';
  }

}
