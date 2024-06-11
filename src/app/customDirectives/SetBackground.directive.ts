import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true
})
export class SetBackgroundDirective implements OnInit { 

  @Input('setBackground')
  backColor: string ="#36454F";
  @Input()
  textColor: string = "white";
  
  constructor(private element: ElementRef,private render: Renderer2) { 
    console.log('Directive initialized');
  }

  ngOnInit() {

    this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor);
    this.render.setStyle(this.element.nativeElement, 'color', this.textColor);

  }

}
