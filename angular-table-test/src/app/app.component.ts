import { Component, OnInit, Input } from '@angular/core';
import { TableDataService } from './table-data.service';
// import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() dataUrl: string;
  @Input() title: string = 'JSON Holder Post Data';

  isReady: boolean = false;
  ELEMENT_DATA: any[];
  displayedColumns: string[];

  constructor(private tableData: TableDataService) {}

  ngOnInit() {
    this.tableData.getTableData(this.dataUrl)
      .subscribe(data => {
        this.ELEMENT_DATA = data;
        this.displayedColumns = Object.getOwnPropertyNames(this.ELEMENT_DATA[0]);
        this.isReady = true
      })
  }
}
