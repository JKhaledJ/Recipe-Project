import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})

export class dropDownDirective{
    // @HostBinding('class.open') isOpen=false;

    // constructor(private elRef: ElementRef, private renderer: Renderer2){}
    // @HostListener('click') openDropDown(){
    //     this.isOpen=!this.isOpen;
    // }

    //To close dropdown by clicking on any part of the page, use this code:1
    @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}