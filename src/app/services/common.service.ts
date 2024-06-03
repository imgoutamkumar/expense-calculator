import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  public updatedData: any;
  sendUpdateddData(data: any): Observable<any> {
    console.log(data);
    this.updatedData = data;
    console.log(this.updatedData);
    return data;
  }
}
