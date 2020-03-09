import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private localSt:LocalStorageService) { }
}
