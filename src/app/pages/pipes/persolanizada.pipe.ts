import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persolanizada'
})
export class PersolanizadaPipe implements PipeTransform {

  transform(value: number, exponente: number = 1): number {
    return Math.pow(value, exponente);
  }

}
