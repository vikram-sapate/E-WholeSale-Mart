import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  error: any;
  constructor(private productService: DataService) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    ProductId: new FormControl(''),
    Category: new FormControl(''),
    Title: new FormControl(''),
    Name: new FormControl(''),
    Discount: new FormControl(''),
    img: new FormControl(''),
    
  });

  addProduct() {
    if (this.form.valid) {
      this.error = null;
      this.productService.addProduct(this.form.value).subscribe((res: any) => {
        alert('Successfully Added');
      }, (error: any) => {
        alert('Something went wrong');
      });
    } else {
      this.error = 'Form invalid';
    }
  }
}
