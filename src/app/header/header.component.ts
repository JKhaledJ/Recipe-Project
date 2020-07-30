import { Component} from '@angular/core';
import {DataStorageService} from '../Shared/data-storage.service'

@Component({
selector:'appHeader',
templateUrl:'./header.component.html'
})

export class headerComponent{
    collapsed = true;
    constructor(private dataStorage: DataStorageService){}

    onPostData(){
        this.dataStorage.postData();
    }
    onFetchData(){
        this.dataStorage.fetchData();
    }
}