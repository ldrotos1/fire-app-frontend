import { IncidentForm } from '../../../classes/incident/incident-form';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fuel-spill-form',
  templateUrl: './fuel-spill-form.component.html',
  styleUrls: ['./fuel-spill-form.component.css'],
})
export class FuelSpillFormComponent implements OnInit {

  @Input() incidentForm: IncidentForm;

  constructor() { }

  ngOnInit() {}

  /**
   * Updates the incident form model with the new
   * fuel spill ignited value
   */
  ignitedChanged( event ): void {
    this.incidentForm.ignited = event.checked;
  }

}
