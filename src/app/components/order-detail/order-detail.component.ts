import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit, AfterViewInit {
  @Input() ownerItems:any;
  @Output() orderList = new EventEmitter();
  foods: Food[] = [
    { value: '0', viewValue: 'Order Given' },
    { value: '1', viewValue: 'Order Recieved' },
    { value: '2', viewValue: 'Out for delivery' },
    { value: '3', viewValue: 'Returns' },
  ];
  totalValue:number=0;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.ownerItems);
    
  }
  getTotal() {
  console.log(this.ownerItems);
  
    // for (let items of this.ownerItems) {
    //   console.log(items);
      
    // }
    this.ownerItems.forEach((e: { total: number; }) => {
      this.totalValue = this.totalValue + e.total;
    });
  }

  getItem(owner: any) {
    console.log(owner);
    this.dataService.vegItems = owner.items;
  }

  back() {
    this.orderList.emit();
  }

  setStatus() {
    this.orderList.emit();
  }
}
interface Food {
  value: string;
  viewValue: string;
}