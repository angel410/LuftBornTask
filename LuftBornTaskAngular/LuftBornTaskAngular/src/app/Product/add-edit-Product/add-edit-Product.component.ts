import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductApiService } from 'src/app/Product-api.service';

@Component({
  selector: 'app-add-edit-Product',
  templateUrl: './add-edit-Product.component.html',
  styleUrls: ['./add-edit-Product.component.css']
})
export class AddEditProductComponent implements OnInit {

  ProductList$!: Observable<any[]>;


  constructor(private service:ProductApiService) { }

  @Input() Product:any;
  id: number = 0;
  Name: string = "";
  Price:number = 0;
  Quantity:number = 0;
  Desc: string = "";

  ngOnInit(): void {
    this.id = this.Product.id;
    this.Name = this.Product.Name;
    this.Price = this.Product.Price;
    this.Quantity = this.Product.Quantity;
    this.Desc = this.Product.Desc;
    
    this.ProductList$ = this.service.getProductist();
  }

  addInspection() {
    var Product = {
     
      id : this.id,
      Name : this.Name,
      Price : this.Price,
      Quantity : this.Quantity,
      Desc : this.Desc

    }
    this.service.addProduct(Product).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateInspection() {
    var Product = {
      
      id : this.id,
      Name : this.Name,
      Price : this.Price,
      Quantity : this.Quantity,
      Desc : this.Desc
    }
    var id:number = this.id;
    this.service.updateProduct(id,Product).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
