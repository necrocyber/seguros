import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  async getDataUser(num: Number): Promise<any> {
    return await this.http.get('/dev/quotes/getResultsByQuoteNumber/36321').toPromise()
    //return result
  }

}
