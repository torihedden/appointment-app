import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})

export class UpperPipe implements PipeTransform {
  transform(description: string): string {
    return description[0].toUpperCase() + description.substr(1);
  }
}
