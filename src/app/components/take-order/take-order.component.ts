import { Component, OnInit } from '@angular/core';
import { DataService, ItemInCart, OrderInBasket } from 'src/app/services/data.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss'],
})
export class TakeOrderComponent implements OnInit {
  items: any = [
    {
      name: 'POTATO',
      rate: 10,
    },
    {
      name: 'TOMATO',

      rate: 10,
    },
    {
      name: 'ONION',

      rate: 10,
    },
    {
      name: 'CARROT',

      rate: 10,
    },
    {
      name: 'CAULIFLOWER',

      rate: 10,
    },
    {
      name: 'TURNIP',

      rate: 10,
    },
    {
      name: 'RED CHILLY',

      rate: 10,
    },
    {
      name: 'GREEN CHILLY',

      rate: 10,
    },
    {
      name: 'PEAS',

      rate: 10,
    },
    {
      name: 'CUCUMBER',

      rate: 10,
    },
    {
      name: 'BRINJAL',

      rate: 10,
    },
    {
      name: 'GARLIC',

      rate: 10,
    },
    {
      name: 'CORN',

      rate: 10,
    },
    {
      name: 'GINGER',

      rate: 10,
    },
    {
      name: 'BITTER GOURD',

      rate: 10,
    },
    {
      name: 'LADY FINGER',

      rate: 10,
    },
  ];
  value: any;
  valueQuantity: any;
  sizeOfOrder:any=0;
  itemesInCart: any=[];
  basket:ItemInCart={
    name:'',
    rate:0,
    quantity:0,
    total:0
  };
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}

  selectedVeg(e: any) {
    console.log(e);
    this.value = e.value;
  }
  getNumber() {
    console.log(this.value);
  }
  getNumberQuantity(){

  }

  addVegetables() {
    let total,
      basket: ItemInCart = {
        name: '',
        rate: 0,
        quantity: 0,
        total: 0,
      };
    
    this.items.forEach((element: { name: any; rate: any }) => {
      if (element.name === this.value) {
        basket.name= this.value;
        basket.rate= element.rate;
        basket.quantity=this.valueQuantity;
        total = element.rate * this.valueQuantity;
       basket.total=total;
        console.log(total);
        this.sizeOfOrder=this.sizeOfOrder+total;
        this.itemesInCart.push(basket); 
      }
    });
  }
}
