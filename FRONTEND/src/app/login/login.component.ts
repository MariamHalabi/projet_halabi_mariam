import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Client } from '../classes/client';
import { LoginService } from '../shared/les-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() utilisateur = new EventEmitter<Client>();
  jwtError: boolean | undefined;
  public connecte: boolean = false;

  loginForm = this.fb.group({
    login: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]{3,20}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{3,20}$'),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService,
    private directedroute: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.jwtError = params['jwtError'];
    });
  }
  onSubmit() {
    if (
      this.loginForm.value.login != null &&
      this.loginForm.value.password != null
    ) {
      this.loginService
        .login(this.loginForm.value.login, this.loginForm.value.password)
        .subscribe((response) => {
          this.utilisateur.emit(response);
        });
      //   this.loginService.login(
      //     this.loginForm.value.login,
      //     this.loginForm.value.password
      //   );
      //   this.connecte = true;
      //   this.directedroute.navigate(['/catalogue']);
    }
  }
}
