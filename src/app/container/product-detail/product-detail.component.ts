import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { SetBackgroundDirective } from '../../customDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../customDirectives/app-hover.directive';
@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [NgFor, CommonModule, SetBackgroundDirective, AppHoverDirective],
  providers: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product;


  @Input() 
  productListComp:  ProductListComponent;

  ngOnInit(): void {
    this.product = this.productListComp.selectedProduct;
  }
  
}
