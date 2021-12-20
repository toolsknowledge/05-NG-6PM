import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'matEx';
    displayedColumns:string[] = ["sno","p_id","p_name","p_cost"];
    products:any[] = [
        {"sno":111,"p_id":"p101","p_name":"p_one","p_cost":10000},
        {"sno":555,"p_id":"p105","p_name":"p_five","p_cost":50000},
        {"sno":222,"p_id":"p102","p_name":"p_two","p_cost":20000},
        {"sno":444,"p_id":"p104","p_name":"p_four","p_cost":40000},
        {"sno":333,"p_id":"p103","p_name":"p_three","p_cost":30000}
    ];
    dataSource:MatTableDataSource<any>;

    constructor(){
      this.dataSource = new MatTableDataSource(this.products);
    }
}
