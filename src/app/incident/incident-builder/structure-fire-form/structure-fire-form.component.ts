import { IncidentForm } from '../../../classes/incident/incident-form';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-structure-fire-form',
  templateUrl: './structure-fire-form.component.html',
  styleUrls: ['./structure-fire-form.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class StructureFireFormComponent implements OnInit {

  @Input() incidentForm: IncidentForm;

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
