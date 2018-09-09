import { IncidentForm } from '../../../classes/incident/incident-form';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mass-casualty-form',
  templateUrl: './mass-casualty-form.component.html',
  styleUrls: ['./mass-casualty-form.component.css']
})
export class MassCasualtyFormComponent implements OnInit {

  @Input() incidentForm: IncidentForm;

  constructor() { }

  ngOnInit() {
  }

}
