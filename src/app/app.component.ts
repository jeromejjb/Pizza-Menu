import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaMenu';



  pizzaMenu: MenuItem[] = [
    {name: "Cheese Pizza", description: ["Cheesy pizza with world best sauce"],price: 29.99,size:  "Large"},
    {name: "Cheese Pizza", description:  ["Cheesy pizza with world best sauce"],price: 25.99,size:  "Medium"},
    {name: "Cheese Pizza", description:  ["Cheesy pizza with world best sauce"],price: 18.99,size:  "Small"},
    {name: "Sausage Pizza", description:  ["Sausage pizza with world best sauce"],price: 29.99,size:  "Large"},
    {name: "Sausage Pizza", description:  ["Sausage pizza with world best sauce"],price: 25.99,size:  "Medium"},
    {name: "Sausage Pizza", description:  ["Sausage pizza with world best sauce"],price: 18.99,size:  "Small"},
    {name: "Veggie Pizza", description:  ["Veggie pizza with world best sauce"],price: 35.99,size:  "Large"},
    {name: "Veggie Pizza", description:  ["Veggie pizza with world best sauce"],price: 32.99,size:  "Medium"},
    {name: "Veggie Pizza", description:  ["Veggie pizza with world best sauce"],price: 25.99,size:  "Small"},
    {name: "Best wings in town", description:  ["Basket of chicken wings all flats tossed in our award winning sauce"],price: 25.99,size:  "Large: 25 wings"},
    {name: "Best wings in town", description:  ["Basket of chicken wings all flats tossed in our award winning sauce"],price: 22.99,size:  "Medium: 15 wings"},
    {name: "Best wings in town", description: ["Basket of chicken wings all flats tossed in our award winning sauce"],price: 12.99,size:  "Small: 10 wings"},
    {name: "Soda/Pop", description:  ["If you order as pop you will only get water"],price: 2.51,size:  "Large"}

  ]

}