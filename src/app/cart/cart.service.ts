
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItem:any= []
  public products = new BehaviorSubject<any>([])
  public produit:any = []


  constructor() { }

  getProduits() {
    this.cartItem = this.getLocalStorage()
    this.products.next(this.cartItem)

    return this.products.asObservable()


  }


  
  ajoutPanier(product: any) {

    this.cartItem.push(product)
    this.products.next(this.cartItem)

    this.getTotalPrice()


  }

  getTotalPrice() {
    let totalPrice = 0
    this.cartItem.map((t: any) => {
      totalPrice += t.totalP

    })

    return totalPrice

  }

  removeCartItem(product: any) {
    this.cartItem.map((item: any, index: any) => {
      if (item.id === product.id) {
        this.cartItem.splice(index, 1)
        this.removeFromLocalStorage(product.id)
      }

      this.products.next(this.cartItem)

    })
  }
  removeFromLocalStorage(id: number) {
    let items = this.getLocalStorage()
    items = items.filter(function (item:any=[]) {
      if (item.id !== id) {
        return item
      }
    })
    localStorage.setItem('cardItem', JSON.stringify(items))
  }
  removeAllCartItem() {
    this.cartItem = []
    this.products.next(this.cartItem)
    localStorage.clear()
  }

  addLocalstorage(item: any) {
    let produits = this.getLocalStorage()
    produits.push(item)
    localStorage.setItem('cardItem', JSON.stringify(produits))
  }

  getLocalStorage() {
    return localStorage.getItem('cardItem') ? JSON.parse(localStorage.getItem('cardItem')) : this.produit = []

  }

}
