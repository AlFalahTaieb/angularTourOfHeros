import { Component, OnInit, Input } from '@angular/core';
import { Distro } from '../distros/distro';
@Component({
  selector: 'app-distro-detail',
  templateUrl: './distro-detail.component.html',
  styleUrls: ['./distro-detail.component.css']
})
export class DistroDetailComponent implements OnInit {
  @Input() distro: Distro;
  constructor() { }

  ngOnInit() {
  }

}
