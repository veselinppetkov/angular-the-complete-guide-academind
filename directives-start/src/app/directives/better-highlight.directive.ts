import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  @Input(`appBetterHighlight`) highlightColor: string;
  @Input() defaultColor: string = 'transparent';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `blue`)
  }

  @HostBinding (`style.backgroundColor`) backgroundColor: string = this.defaultColor;

  @HostListener(`mouseenter`) mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `blue`)
    this.backgroundColor = this.highlightColor;
  }

  @HostListener(`mouseleave`) mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, `background-color`, `transparent`)
    this.backgroundColor = this.defaultColor;

  }

}
