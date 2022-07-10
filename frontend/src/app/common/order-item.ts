import {CartItem} from "./cart-item";

export class OrderItem {
  imageUrl: string = "";
  unitPrice: number = 0;
  quantity: number = 0;
  productId: string = "";

  constructor(cartItem: CartItem) {
    if (typeof cartItem.imageUrl === "string") {
      this.imageUrl = cartItem.imageUrl;
    }
    this.quantity = cartItem.quantity;
    this.unitPrice = cartItem.unitPrice;
    // @ts-ignore
    this.productId = cartItem.id;
  }
}
