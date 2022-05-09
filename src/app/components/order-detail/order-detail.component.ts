import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, AfterViewInit {
  @Input() ownerItems: any;
  @Output() orderList = new EventEmitter();
  foods: Food[] = [
    { value: '0', viewValue: 'Order Given' },
    { value: '1', viewValue: 'Order Recieved' },
    { value: '2', viewValue: 'Out for delivery' },
    { value: '3', viewValue: 'Returns' },
  ];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.ownerItems);
  }

  getItem(owner: any) {
    console.log(owner);
    this.dataService.vegItems = owner.items;
  }

  back() {
    this.orderList.emit();
  }

  setStatus(){
    this.orderList.emit();
  }
}
interface Food {
  value: string;
  viewValue: string;
}