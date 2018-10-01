import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-frame',
  templateUrl: './common-frame.component.html',
  styleUrls: ['./common-frame.component.scss'],
})
export class CommonFrameComponent implements OnInit {

  links = [
    'jsdalfjsdafj',
    'fsdfja;sldfj',
    'fjwejfowegjwoj',
  ];

  constructor() { }

  ngOnInit() {
  }

  showInfo(link: string) {
    console.log(link);
  }
}
