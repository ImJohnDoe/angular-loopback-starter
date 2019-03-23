import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PingService {

  constructor(
    private Http: HttpClient
  ) { }

  getPing() {
    return this.Http.get('api/ping');
  }
}
