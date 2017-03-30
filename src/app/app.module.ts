import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AgGridModule} from "ag-grid-angular/main";
import {MdMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { RedComponentComponent } from './red-component/red-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RedComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdMenuModule,
    AgGridModule.withComponents(
            [RedComponentComponent]
        )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
