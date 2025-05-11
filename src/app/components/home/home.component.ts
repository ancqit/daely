import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    OrderDetailComponent,
    OrderListComponent,
    RouterModule,
    CommonModule,
    NgClass
  ],
})
export class HomeComponent implements OnInit {
  vegList: any = null;
  vegListItem: any = null;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.vegList = this.dataService.orderItemGet;
    console.log(this.vegList);
  }
  orderDetail(owner: any) {
    console.log(owner);
    this.vegListItem = null;
    this.vegListItem = owner.items;
    this.vegList = null;
  }
  OrderList() {
    this.showList();
    this.vegListItem = null;
  }
  giveOrder() {
    this.router.navigate(['order']);
  }
}
