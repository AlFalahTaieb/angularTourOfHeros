import { Component, OnInit } from '@angular/core';
import { Distro } from './distro';
@Component({
  selector: 'app-distros',
  templateUrl: './distros.component.html',
  styleUrls: ['./distros.component.css']
})
export class DistrosComponent implements OnInit {
  distro: Distro = {
    id: 1,
    name: 'Debian'
  };

  constructor() {


  }

  ngOnInit() {
  }

}

