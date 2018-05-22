import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as CONSTANTS from './resume_constants';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
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
