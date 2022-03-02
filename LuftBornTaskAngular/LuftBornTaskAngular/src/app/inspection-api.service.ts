import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  readonly inspectionAPIUrl = "https://localhost:44378/api";

  constructor(private http:HttpClient) { }

  getProductist():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Products');
  }

  addProduct(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Products', data);
  }

  updateProduct(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Products/${id}`, data);
  }

  deleteProduct(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Products/${id}`);
  }

  
}
