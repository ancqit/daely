import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
  @Input() ownerItems: any;
  @Output() orderList = new EventEmitter();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  getItem(owner: any) {
    console.log(owner);
    this.dataService.vegItems = owner.items;
  }
}
