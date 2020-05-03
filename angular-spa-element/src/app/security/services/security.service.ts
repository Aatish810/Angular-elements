import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Credential } from "../models/credential";
import { AuthToken } from "../models/auth-token";

@Injectable()
export class SecurityService {

  constructor(private _httpClient:HttpClient) { 

  }
  checkCredentials(credential:Credential):Observable<AuthToken>{
    return this._httpClient.post<AuthToken>("http://localhost:9090/synauth",credential);
  }
}
