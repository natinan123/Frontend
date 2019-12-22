import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private sessionService: SessionStorageService) { }
  
  public setActiveUser(data) {
    this.sessionService.store('ACTIVE_USER', data);
  }

  public getActiveUser() {
    return this.sessionService.retrieve('ACTIVE_USER');
  }

  public clearActiveUser() {
    this.sessionService.clear('ACTIVE_USER');
  }
}
