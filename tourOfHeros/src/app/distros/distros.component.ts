import { Component, OnInit } from '@angular/core';
import { Distro } from './distro';
import { DISTROS } from './exp-distros';
@Component({
  selector: 'app-distros',
  templateUrl: './distros.component.html',
  styleUrls: ['./distros.component.css']
})
export class DistrosComponent implements OnInit {
  distros = DISTROS;

  selectedDistro: Distro;
  onSelect(distro: Distro) {
    console.log(this.selectedDistro = distro);
    this.selectedDistro = distro;
  }
  constructor() {


  }

  ngOnInit() {

  }

}

