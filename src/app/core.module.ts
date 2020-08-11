import { AuthInterceptorService } from './Auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { NgModule } from '@angular/core';

@NgModule({
    providers:[
        ShoppingListService,
        RecipeService,
        { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}
    ]
})
export class CoreModule{

}