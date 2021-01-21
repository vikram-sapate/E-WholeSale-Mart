import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers = [
    {
      customerID: 'customerID',
      firstName: 'firstName1',
      lastName: 'lastName1',
      address: 'address1',
      contact: 'contact1',
      userName: 'firstName1',
      email: 'lastNam1',
      zipCode: 'address1',
      city: 'contact1',
      createdOn: 'address1',
      phone: 'address1',
      landMark: 'ddd'
    },
  ];

  constructor(private customerService: DataService) {}

  ngOnInit(): void {
    this.customerService.getCustomerList().subscribe((customers: any) => {
      this.customers = customers;
    }, (err) => {
      alert('Failed to load customers');
    });
  }

  deleteCustomer(customerID: any) {
    this.customerService.deleteCustomer(customerID).subscribe((res: any) => {
      alert('Successfully Deleted');
      this.customers = this.customers.filter((customer) => {
        return customer.customerID != customerID;
      });
    }, (err) => {
      alert('Something went wrong');
    });
  }
}
