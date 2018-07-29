import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

@NgModule({
  imports: [
    LeafletModule
  ]
})

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  baseMapUrl = 'https://api.mapbox.com/styles/v1/ldrotos/cjk7ejowm5htm2rl579r0etey/tiles/256/{z}/{x}/{y}';
  baseMapToken = 'pk.eyJ1IjoibGRyb3RvcyIsImEiOiJwQXgwZ2ZVIn0.pPrIMXZdwniJcp79DNpg9g';
  baseMapAccess = this.baseMapUrl + '?access_token=' + this.baseMapToken;

  options = {
    layers: [ L.tileLayer( this.baseMapAccess, { maxZoom: 18, attribution: '...' })],
    zoom: 10,
    center: L.latLng(38.8613, -77.2457)
  };

  constructor() { }

  ngOnInit() {
  }

}
