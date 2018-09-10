import { IncidentForm } from '../../../classes/incident/incident-form';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mass-casualty-form',
  templateUrl: './mass-casualty-form.component.html',
  styleUrls: ['./mass-casualty-form.component.css']
})
export class MassCasualtyFormComponent implements OnInit {

  @Input() incidentForm: IncidentForm;

  private casCountControl = new FormControl('', [
    Validators.required,
    Validators.min( 5 ),
    Validators.max( 100 )
  ]);

  constructor() { }

  ngOnInit() {
  }

}
