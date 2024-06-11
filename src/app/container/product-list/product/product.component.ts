import { CommonModule, NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { HighlightDirective } from '../../../customDirectives/highlight.directive';
import { DisableProductDirective } from '../../../customDirectives/disable-product.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgStyle, NgIf, DisableProductDirective, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  product: Product;

}