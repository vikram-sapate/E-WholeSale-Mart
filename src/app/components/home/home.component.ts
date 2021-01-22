import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCustomerListClick() {
    this.router.navigate(['customer-list']);
  }

  onAddCustomerClick() {
    this.router.navigate(['add-customer']);
  }

  onRemoveCustomerClick() {
    this.router.navigate(['remove-customer']);
  }

  onUpdateCustomerClick() {
    this.router.navigate(['update-customer']);
  }

  onProductListClick() {
    this.router.navigate(['product-list']);
  }

  onProducAddClick(){
    this.router.navigate(['add-product']);

  }

}
