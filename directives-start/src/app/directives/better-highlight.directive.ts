import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `blue`)
  }

  @HostListener(`mouseenter`) mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `blue`)
  }

  @HostListener(`mouseleave`) mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `transparent`)
  }

}
