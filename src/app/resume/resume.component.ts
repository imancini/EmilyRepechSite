import { Component, OnInit } from '@angular/core';
import * as CONSTANTS from './resume_constants';

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
  }

}
