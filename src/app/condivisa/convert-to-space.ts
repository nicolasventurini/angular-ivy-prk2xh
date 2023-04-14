import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace',
})
export class COnvertToSpacePipe implements PipeTransform {
  transform(valore: string, carattere: string): string {
    return valore.replace(carattere, ' ');
  }
}
