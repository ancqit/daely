import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, AfterViewInit {
  @Input() orderList: any;
  @Output() orderDetail = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.orderList);
  }

  getItem(owner:any){
    console.log(owner);
    
    this.orderDetail.emit(owner);
  }
}
