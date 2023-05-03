import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../sharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../sharedClassesAndTypes/IProduct';
import { ICategory } from '../sharedClassesAndTypes/ICategory';
import { ProductServiceService } from '../services/product-service.service';
import { clippingParents } from '@popperjs/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers;

  storeName: string;
  storeLogo: string;
  productsList: IProduct[];
  categoriesList: ICategory[];
  clientName: string;
  isPurchased: boolean;
  errorMessage: any;

  constructor(private productService: ProductServiceService) {
    this.discount = DiscountOffers.tenPercent;
    this.storeName = 'Hyper One';
    this.storeLogo = './assets/storeLogo.jpg';
    // this.productsList = [
    //   {
    //     id: 1,
    //     img: './assets/p1.jpg',
    //     name: 'Corn Flakes',
    //     price: 20,
    //     quantity: 5,
    //     isPurchased: false,
    //   },
    //   {
    //     id: 2,
    //     img: './assets/p2.jpg',
    //     name: 'iPhone11',
    //     price: 20000,
    //     quantity: 5,
    //     isPurchased: false,
    //   },
    //   {
    //     id: 3,
    //     img: './assets/p3.jpg',
    //     name: 'iPhone12',
    //     price: 30000,
    //     quantity: 5,
    //     isPurchased: false,
    //   },
    //   {
    //     id: 4,
    //     img: './assets/p4.jpg',
    //     name: 'iPhone13',
    //     price: 40000,
    //     quantity: 5,
    //     isPurchased: false,
    //   },
    // ];
    this.categoriesList = [{ id: 1, name: 'Processed Food' }];
    this.clientName = 'Mostafa';
    this.isPurchased = false;
  }

  buyItem(product: any = null): void {
    if (product === null) {
      this.isPurchased = !this.isPurchased;
    } else {
      product.isPurchased = !product.isPurchased;
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderValues();
    console.log(this.productsList);
  }
  renderValues() {
    this.productService
      .GetAllProducts()
      .subscribe({
        next: (data) => (this.productsList = data),
        error: (error) => (this.errorMessage = error),
      });
  }
}
