import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `blue`)
  }

  @HostBinding (`style.backgroundColor`) backgroundColor: string = "transparent";

  @HostListener(`mouseenter`) mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `blue`)
    this.backgroundColor = 'blue';
  }

  @HostListener(`mouseleave`) mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `transparent`)
    this.backgroundColor = 'transparent';

  }

}
