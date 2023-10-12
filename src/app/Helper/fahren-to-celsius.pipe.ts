import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenToCelsius'
})
export class FahrenToCelsiusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    
    
    return null;
  }

}
