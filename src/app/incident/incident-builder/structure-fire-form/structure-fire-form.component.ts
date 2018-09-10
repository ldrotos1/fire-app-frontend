import { IncidentForm } from '../../../classes/incident/incident-form';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-structure-fire-form',
  templateUrl: './structure-fire-form.component.html',
  styleUrls: ['./structure-fire-form.component.css']
})
export class StructureFireFormComponent implements OnInit {

  @Input() incidentForm: IncidentForm;

  private alarmNumControl = new FormControl('', [
    Validators.required,
    Validators.min( 1 ),
    Validators.max( 5 )
  ]);

  constructor() { }

  ngOnInit() {
  }

  /**
   * Updates the incident form model with the new
   * hydrant access value
   */
  hydrantAccessChanged( event ): void {
    this.incidentForm.hydrantAccess = event.checked;
  }
}
