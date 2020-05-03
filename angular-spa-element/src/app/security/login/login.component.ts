import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthToken } from "../models/auth-token";
import { Credential } from "../models/credential";

import { SecurityService } from "../services/security.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _securityService: SecurityService, private _router: Router, private _activatedRoute: ActivatedRoute) { }
  credential: Credential = new Credential();
  title: string = "Company Login!";
  authToken: AuthToken;
  returnUrl: string;
  ngOnInit() {
    this.returnUrl = this._activatedRoute.snapshot.queryParamMap.get("returnUrl") || "/";
  }
  onCredentialSubmit(e): void {
    e.preventDefault();
    this._securityService.checkCredentials(this.credential).subscribe(
      data => {
        this.authToken = data;
        if (this.authToken.token) {
          sessionStorage.setItem("token", this.authToken.token);
          this._router.navigateByUrl(this.returnUrl);
        }
      },
      err => console.log(err)
    )
  }
}
