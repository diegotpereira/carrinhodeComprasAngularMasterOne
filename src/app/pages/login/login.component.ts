import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { LoginModule } from './login.module';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

              imports: [
                LoginModule
                ]

  LogOn() {
    localStorage['token'] = 'xptoh26410x5=50';  
    this.router.navigate(['/produtos']);
  }

  ngOnInit(): void {
  }

}
