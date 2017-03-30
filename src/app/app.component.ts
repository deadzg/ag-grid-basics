import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid';
import {AgGridModule} from 'ag-grid-angular/main';
import {RedComponentComponent} from './red-component/red-component.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private gridOptions: GridOptions;

  constructor() {
      this.gridOptions = {};
      this.gridOptions.columnDefs = [
          {
              headerName: "ID",
              field: "id",
              width: 200
          },
          {
              headerName: "Value",
              field: "value",
              cellRendererFramework: RedComponentComponent,
              width: 200
          },

      ];
      this.gridOptions.rowData = [
          {id: 5, value: 10},
          {id: 10, value: 15},
          {id: 15, value: 20}
      ]
  }
}
