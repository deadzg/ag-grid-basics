import { Component,ViewChild} from '@angular/core';
import {MdMenu} from '@angular/material/menu';


@Component({
  selector: 'app-red-component',
  templateUrl: './red-component.component.html',
  styleUrls: ['./red-component.component.css']
})
export class RedComponentComponent  {
  private params:any;
  @ViewChild(MdMenu) menu: MdMenu;
  constructor() { }
  //The ag Framework expects to find the agInit method on the created component, and uses it to supply the cell params.
  agInit(params:any):void {
    this.params = params;
  }
  onSelect(){
    console.log("Wonderful");
    console.log(this.menu.positionX);
  }
}
