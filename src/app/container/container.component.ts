import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FeaturedBrandsComponent } from "./featured-brands/featured-brands.component";

@Component({
    selector: 'app-container',
    standalone: true,
    providers: [],
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    imports: [NgIf, SearchComponent, NgFor, ProductListComponent, ProductDetailComponent, FeaturedBrandsComponent]
})
export class ContainerComponent {

  searchText: string = '';

  @ViewChild(ProductListComponent)
  productListComp: ProductListComponent;


  setSearchText(value: string) {
    this.searchText = value; 
    }

    
}
