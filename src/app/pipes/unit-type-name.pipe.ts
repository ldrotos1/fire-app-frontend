import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitTypeName'
})
export class UnitTypeNamePipe implements PipeTransform {

  transform( typeName: string ): string {
    switch ( typeName ) {
     case 'Battalion Chief':
        return 'Batl Chief';
     case 'EMS Supervisor':
        return 'EMS Supv';
     case 'Mobile Command Post':
        return 'Mobile Command';
     case 'Mass Casualty Support':
        return 'Mass Cas Spt';
     case 'Medical Ambulance Bus':
        return 'Med Amb Bus';
     case 'Foam Engine':
        return 'Foam Eng';
     default:
        return typeName;
    }
  }
}
