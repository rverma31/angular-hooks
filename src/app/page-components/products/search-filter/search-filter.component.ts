import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, SimpleChanges,OnChanges, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})

export class SearchFilterComponent implements OnInit, AfterViewInit, OnChanges {
  //listFilter: string ;
  @Input() hitCount: number;
  @Output() valueChange : EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('filterElement',{ static: false }) filterElementRef : ElementRef;
  
  hitMessage : string;

  private _listFilter : string;

  get listFilter() : string {
    return this._listFilter;
  }

  set listFilter(value : string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
    console.log("Search (Child) component ====> NgOnInit is called");
  }

  ngAfterViewInit() {
    console.log("Search (Child) component ====> ngAfterViewInit is called");
    if(this.filterElementRef) {
      this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log("Search (Child) component ====> ngOnChanges is called");
    console.log(changes);
    if( changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'No Match Found';
    } else {
      this.hitMessage = 'Results Found:' + this.hitCount;
    }

  }

}
