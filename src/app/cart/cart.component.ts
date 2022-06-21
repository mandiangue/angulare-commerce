import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any
  totalItem: any = []

  constructor(private carservice: CartService) { }

  ngOnInit(): void {
    this.carservice.getProduits().subscribe((res) => {
      this.products = res;
     
      this.totalItem = this.carservice.getTotalPrice()


    })

  }



  deleteItem(product: any) {
    this.carservice.removeCartItem(product)
  }
  viderPanier() {
    this.carservice.removeAllCartItem()
  }
}
