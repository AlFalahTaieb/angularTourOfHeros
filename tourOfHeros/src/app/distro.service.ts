import { Injectable } from '@angular/core';
import { Distro } from './distros/distro';
import { DISTROS } from './distros/exp-distros';



@Injectable({
  providedIn: 'root'
})
export class DistroService {
  getDistros(): Distro[] {
    return DISTROS;
  }
  constructor() { }
}
