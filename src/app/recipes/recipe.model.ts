import { Ingredient } from '../Shared/shared.model';

export class Recipe{
    public name:string;
    public description: string;
    public ImagePath:string;
    public Ingredient:Ingredient[];
    constructor(name:string, desc:string, imagePath:string,ingredient: Ingredient[]){
        this.name=name;
        this.description=desc;
        this.ImagePath=imagePath;
        this.Ingredient=ingredient;
    }
}