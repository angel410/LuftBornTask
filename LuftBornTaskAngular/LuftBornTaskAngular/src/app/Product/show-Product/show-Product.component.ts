import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductApiService } from 'src/app/Product-api.service';

@Component({
  selector: 'app-show-Product',
  templateUrl: './show-Product.component.html',
  styleUrls: ['./show-Product.component.css']
})
export class ShowProductComponent implements OnInit {

productList$!:Observable<any[]>;

  // Map to display data associate with foreign keys

  constructor(private service:ProductApiService) { }

  ngOnInit(): void {
    this.productList$ = this.service.getProductist();
  }

  // Variables (properties)
  modalTitle:string = '';
  activateAddEditProductComponent:boolean = false;
  Product:any;

  modalAdd() {
    this.Product = {
      id: 0,
      Name: null,
      Price:0,
      Quantity:0,
      Desc: null
    }
    this.modalTitle = "Add Inspection";
    this.activateAddEditProductComponent = true;
  }

  modalEdit(item:any) {
    this.Product = item;
    this.modalTitle = "Edit Inspection";
    this.activateAddEditProductComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete inspection ${item.id}`)) {
      this.service.deleteProduct(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.productList$ = this.service.getProductist();
      })
    }
  }

  modalClose() {
    this.activateAddEditProductComponent = false;
    this.productList$ = this.service.getProductist();
  }

 

}
