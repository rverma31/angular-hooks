import { Component, OnInit ,Input, OnChanges ,SimpleChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnChanges {
  
  @Input() message: String;
  allMsgChangeLogs: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Header component NgOnChanges Triggered");
    // for (let propName in changes) {
    //   let change = changes[propName];
    //   let currVal = JSON.stringify(change.currentValue);
    //   let prevVal = JSON.stringify(change.previousValue);
    //   let changeLog = `currentValue = ${currVal}, previousVal = ${prevVal}`;

    //   if (propName == "message") {
    //     this.allMsgChangeLogs.push(changeLog);
    //   }
    // }
  }

}
