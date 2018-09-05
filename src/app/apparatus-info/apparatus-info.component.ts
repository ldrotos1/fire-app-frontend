import { ApparatusType } from '../classes/apparatustype';
import { ApparatusTypeLite } from '../classes/apparatustypelite';
import { ApparatusService } from '../services/apparatus.service';
import { MapstateService } from '../services/mapstate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apparatus-info',
  templateUrl: './apparatus-info.component.html',
  styleUrls: ['./apparatus-info.component.css']
})
export class ApparatusInfoComponent implements OnInit {

  private title = 'Apparatus Type Information';
  private icon = 'local_taxi';
  private apparatusType: ApparatusType;
  private apparatusTypes: ApparatusTypeLite[];

  constructor(
    private apparatusService: ApparatusService,
    private mapstateService: MapstateService ) { }

  ngOnInit() {
    this.getApparatusTypes();
  }

  /**
   * Gets the basic station information that will popoulate the
   * autocomplete select input.
   */
  getApparatusTypes(): void {

    this.apparatusService.getApparatusTypes()
      .subscribe( apparatusTypes => this.apparatusTypes = apparatusTypes );
  }

  /**
   *
   */
  onApparatusTypeSelected( typeId: number ): void {
    console.log( typeId );
  }
}
