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

  options = {
    layers: [ L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  };
  
  constructor() { }

  ngOnInit() {
  }

}
