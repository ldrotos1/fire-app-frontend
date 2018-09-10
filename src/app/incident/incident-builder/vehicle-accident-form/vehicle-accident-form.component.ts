import { IncidentForm } from '../../../classes/incident/incident-form';
import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicle-accident-form',
  templateUrl: './vehicle-accident-form.component.html',
  styleUrls: ['./vehicle-accident-form.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class VehicleAccidentFormComponent implements OnInit {

  @Input() incidentForm: IncidentForm;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Updates the incident form model with the new
   * entrapment value
   */
  entrapmentChanged( event ): void {
    this.incidentForm.entrapment = event.checked;
  }

  /**
   * Updates the incident form model with the new
   * hazmat value
   */
  hazmatChanged( event ): void {
    this.incidentForm.hazmat = event.checked;
  }
}
