import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'matEx';
    
    
    @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;
    @ViewChild(MatSort,{static:true}) sort:MatSort;

    displayedColumns:string[] = ["sno","p_id","p_name","p_cost"];
    
    
    
    products:any[] = [
        {"sno":1,"p_id":"p101","p_name":"p_one","p_cost":10000},
        {"sno":5,"p_id":"p105","p_name":"p_five","p_cost":50000},
        {"sno":2,"p_id":"p102","p_name":"p_two","p_cost":20000},
        {"sno":4,"p_id":"p104","p_name":"p_four","p_cost":40000},
        {"sno":3,"p_id":"p103","p_name":"p_three","p_cost":30000}
    ];
    dataSource:MatTableDataSource<any>;

    constructor(){
      
      }

    ngOnInit(){
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: any) {

      this.dataSource.filter = filterValue.value.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }



}
