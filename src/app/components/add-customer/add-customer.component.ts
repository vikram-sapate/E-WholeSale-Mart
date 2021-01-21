import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  error: any;
  constructor(private customerService: DataService) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    zip: new FormControl(''),
    email: new FormControl(''),
    userName: new FormControl(''),
    phone: new FormControl(''),
  });

  add() {
    if (this.form.valid) {
      this.error = null;
      this.customerService.addCustomer(this.form.value).subscribe((res: any) => {
        alert('Successfully Added');
      }, (err) => {
        alert('Something went wrong');
      });
    } else {
      this.error = 'Form invalid';
    }
  }
}
