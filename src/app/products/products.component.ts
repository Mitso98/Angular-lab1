import { Component } from '@angular/core';
import { DiscountOffers } from '../sharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../sharedClassesAndTypes/IProduct';
import { ICategory } from '../sharedClassesAndTypes/ICategory';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  discount: DiscountOffers;

  storeName: string;
  storeLogo: string;
  productsList: IProduct[];
  categoriesList: ICategory[];
  clientName: string;
  isPurchased: boolean;

  constructor() {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = 'Hyper One';
    this.storeLogo = './assets/storeLogo.jpg';
    this.productsList = [
      {
        id: 1,
        img: './assets/p1.jpg',
        name: 'Corn Flakes',
        price: 20,
        quantity: 5,
      },
    ];
    this.categoriesList = [{id:1,name:"Processed Food"}];
    this.clientName = "Mostafa";
    this.isPurchased = true;
  }
}
