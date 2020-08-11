import { CommonModule } from '@angular/common';
import { dropDownDirective } from './dropdown.directive';
import { PlaceHolderDirective } from './Placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loadingSpinner/loading-spinner.component';
import { AlertCompoenet } from './alert/alert.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        AlertCompoenet,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        dropDownDirective
    ],
    imports:[
        CommonModule,
    ],
    exports:[
        AlertCompoenet,
        LoadingSpinnerComponent,
        PlaceHolderDirective,
        dropDownDirective,
        CommonModule
    ]
})
export class SharedModule{

}