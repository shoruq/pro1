import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() title:String;
  @Output() out=new EventEmitter<String>();
  do()
  {
    this.out.emit("my child clicked");
  }

}
