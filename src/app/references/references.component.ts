import { Component, OnInit } from '@angular/core';
import * as CONSTANTS from './references_constants';
import * as AOS from 'aos';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  public CONSTANTS: any;

  constructor() { 
    this.CONSTANTS = CONSTANTS.DATA
  }

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    AOS.refresh();
  }

}
