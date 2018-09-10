import { IncidentForm } from '../../../classes/incident/incident-form';
import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-mass-casualty-form',
  templateUrl: './mass-casualty-form.component.html',
  styleUrls: ['./mass-casualty-form.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class MassCasualtyFormComponent implements OnInit {

  @Input() incidentForm: IncidentForm;

  constructor() { }

  ngOnInit() {
  }

}
