import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  vegList: any;
  vegListItem: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.showList();
  }

  showList() {
    this.vegList = this.dataService.orderItemGet;
    console.log(this.vegList);
  }
  orderDetail(owner: any) {
    console.log(owner);
    this.vegListItem = owner.items;
  }
  OrderList(){
    this.showList();
    
  }
}
