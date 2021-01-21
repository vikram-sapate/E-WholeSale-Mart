import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {
      productId: 'dss',
      category: 'firssssssssstName1',
      title: 'lastNasssssme1',
      name: 'addressssss1',
      price: 'contasssct1',
      discount: 'firsdstName1',
      isActive: 'lastNamdd1',
      city: 'contdddact1',
      createdOn: 'addresds1',
    },
  ];
  constructor(private customerService: DataService) { }

  ngOnInit(): void {
    this.customerService.getProductList().subscribe((customers: any) => {
      this.products = customers;
    }, (err) => {
      alert('Failed to load Products');
    });
  }

  deleteProduct(productId: any) {
    this.customerService.deleteProduct(productId).subscribe((res: any) => {
      alert('Successfully Deleted');
      this.products = this.products.filter((product) => {
        return product.productId != productId;
      });
    }, (err) => {
      alert('Something went wrong');
    });
  }

}
