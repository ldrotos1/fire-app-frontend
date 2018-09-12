import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToMinutes'
})
export class SecondsToMinutesPipe implements PipeTransform {

  transform( sec: number ): string {

    let minutes: number;
    let seconds: number;
    let colon = ':';

    if ( sec >= 60 ) {
      minutes = Math.floor( sec / 60 );
    } else {
      minutes = 0;
    }

    seconds = sec - minutes * 60;

    if ( seconds < 10 ) {
      colon = ':0';
    }

    return minutes.toString() + colon + seconds.toString() + ' mins';
  }
}
