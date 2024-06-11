import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.render.addClass(this.element.nativeElement, 'highlight-product');
  }

  @HostListener('mouseout') onMouseOut(){
    this.render.removeClass(this.element.nativeElement, 'highlight-product');
  }


}
