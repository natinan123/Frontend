import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(private viewService: SessionStorageService) { }

  public setActiveUser(data) {
    this.viewService.store('view', data);
  }

  public getActiveUser() {
    return this.viewService.retrieve('view');
  }

  public clearActiveUser() {
    this.viewService.clear('view');
  }

 
}

