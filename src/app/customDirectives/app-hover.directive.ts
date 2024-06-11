import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer : Renderer2) { }

 @HostBinding('style.backgroundColor') backgroundColor: string = 'green';
 @HostBinding('style.color') color: string = 'white';
 @HostBinding('style.cursor') cursor: string = 'pointer';
 @HostBinding('style.border') border: string = 'none';

 // host mouseenter and mouseleave host listeners to chage the background, border and text color
 @HostListener('mouseenter') onMouseEnter() {
   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
   this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
   this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
   this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
 }
 @HostListener('mouseleave') onMouseLeave() {
   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
   this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
   this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
 }







}
