import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-Alert',
    templateUrl:'./alert.component.html',
    styleUrls:['./alert.component.css']
})
export class AlertCompoenet{
    @Input() message: string;
    @Output() close = new EventEmitter<void>();
    onClose(){
        this.close.emit();
    }
}