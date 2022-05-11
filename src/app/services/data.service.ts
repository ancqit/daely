import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public vegItems: any;
  private orderItem: OrderInBasket[] = [
    {
      mobile: 8340300635,
      orderNumber: 1,
      status: 0,
      items: [
        {
          name: 'POTATO',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'TOMATO',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'ONION',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CARROT',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CAULIFLOWER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'TURNIP',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'RED CHILLY',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'GREEN CHILLY',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'PEAS',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CUCUMBER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'BRINJAL',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'GARLIC',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CORN',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'GINGER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'BITTER GOURD',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'LADY FINGER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
      ],
    },
    {
      mobile: 8340300635,
      orderNumber: 1,
      status: 0,
      items: [
        {
          name: 'POTATO',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'TOMATO',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'ONION',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CARROT',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CAULIFLOWER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'TURNIP',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'RED CHILLY',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'GREEN CHILLY',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'PEAS',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CUCUMBER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'BRINJAL',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'GARLIC',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'CORN',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'GINGER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'BITTER GOURD',
          quantity: 3,
          rate: 10,
          total: 30,
        },
        {
          name: 'LADY FINGER',
          quantity: 3,
          rate: 10,
          total: 30,
        },
      ],
    },
  ];
  public get orderItemGet(): OrderInBasket[] {
    return this.orderItem;
  }
  public set orderItemSet(value: OrderInBasket[]) {
    this.orderItem = value;
  }

  public get vegItemsGet(): any {
    return this.vegItems;
  }
  public set vegItemsSet(value: any) {
    this.vegItems = value;
  }
}

export interface ItemInCart {
  name: string;
  quantity: number;
  rate: number;
  total: number;
}
export interface OrderInBasket {
  mobile: number;
  orderNumber: number;
  status: number;
  items: ItemInCart[];
}
