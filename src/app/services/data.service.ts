import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  server = '';
  constructor(private http: HttpClient) {}

  getCustomerList() {
    return this.http.get(`${this.server}/customers`);
  }

  getProductList() {
    return this.http.get(`${this.server}/products`);
  }

  addCustomer(customer: any) {
    return this.http.post(`${this.server}/customers`, customer);
  }

  deleteCustomer(customerID: any) {
    return this.http.delete(`${this.server}/customers/${customerID}`);
  }

  deleteProduct(productID: any) {
    return this.http.delete(`${this.server}/products/${productID}`);
  }

  updateCustomer(customer: any) {
    return this.http.patch(`${this.server}/customers`, customer);
  }

  // blockCustomer(customerID: any) {
  //   return this.http.post(`${this.server}/customers/${customerID}`);
  // }
}
