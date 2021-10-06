import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() p_id:any;
  @Input() p_name:any;
  @Input() p_cost:any;

  @Output() productInfo:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickMe():any{
     this.productInfo.emit({"p_id":this.p_id,
                            "p_name":this.p_name,
                            "p_cost":this.p_cost});
  }




}
