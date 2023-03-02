import { Pipe, PipeTransform } from '@angular/core';
/*  ng g pipe Salutation --flat:  –flat puts the file in src/app instead of its own folder */
@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(Name:string,Gender:string,MaritialStatus:string): string {
    if(Gender.toLowerCase()=='male')
    {
      if(MaritialStatus.toLowerCase()=='unmarried')
      return 'Master. '+Name;
      else
      return 'Mr. '+Name;
    }
    if(Gender.toLowerCase()=='female')
    {
      if(MaritialStatus.toLowerCase()=='unmarried')
      return 'Miss. '+Name;
      else
      return 'Mrs. '+Name;
    }
    return 'Invalid Data';
  }

}
