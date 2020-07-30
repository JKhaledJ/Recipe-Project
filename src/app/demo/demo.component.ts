import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  regForm:FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm=this.fb.group({
      email:['abc@gmail.com'],
      password:['123'],
      Items:this.fb.array([
        this.fb.group({
          ItemId:['1'],
          ItemName:['ABC']
        })
      ])
    })
  }

  get Items(){
    return this.regForm.get('Items') as FormArray;
  }

}
