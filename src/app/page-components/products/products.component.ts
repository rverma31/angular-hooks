import { Component, OnInit ,OnDestroy,SimpleChanges,OnChanges, ViewChild, AfterViewInit}  from '@angular/core';
import * as products from 'src/assets/data/products.json';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy,OnChanges,AfterViewInit {

  productsList: IProduct[] = (products as any).default;
 // listFilter : string;
  @ViewChild('searchFilter',{ static:false }) filterComponent :SearchFilterComponent;
  parentListFilter :string;
  filteredProducts: IProduct[];

  constructor() { }
  

  ngOnInit() {
    console.log("Products Component ===> ngOnInit");
    this.performFilter();
  }

  ngAfterViewInit() {
    console.log("Products Component ===> ngAfterViewInit is called");
    this.parentListFilter = this.filterComponent.listFilter;
    console.log(this.parentListFilter);
  }
  
  onValueChange(value :string) {
    this.performFilter(value);
  }

  performFilter(filterBy? : string) {
    if (filterBy) {
      this.filteredProducts = this.productsList.filter((product : IProduct) =>
        product.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    } else {
      this.filteredProducts = this.productsList;
      console.log(this.filteredProducts);
    }
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("Product Component : ngOnChanges is called");
  }

  ngOnDestroy() {
    console.log("Product Component : NgOnDestroy is called");
  }

}
