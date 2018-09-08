import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrosshairViewService {

  private crosshairActive = new Subject<boolean>();

  watchCrosshairState = this.crosshairActive.asObservable();

  constructor() { }

  /**
   * Sends a message to subscribers with the updated
   * crosshair cursor state.
   */
  setCrosshairState( crosshairState: boolean ): void {

    this.crosshairActive.next( crosshairState );
  }
}
