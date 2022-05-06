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
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.ownerItems);
  }

  getItem(owner: any) {
    console.log(owner);
    this.dataService.vegItems = owner.items;
  }

  back(){
    this.orderList.emit();
  }
}
