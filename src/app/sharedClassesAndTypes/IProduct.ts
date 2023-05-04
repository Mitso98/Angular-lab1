import { DiscountOffers } from "./DiscountOffers";



export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
  isPurchased: boolean;
  discount: DiscountOffers;
}
