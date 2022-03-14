import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[basicHighlightDirective]'
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }

}