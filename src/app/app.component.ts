import { AuthService } from './Auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  onFeatureSelected(feature: string){
    this.loadedFeature=feature;
  }
  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.autoLogin();
  }
}
