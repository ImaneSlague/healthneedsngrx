import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../dashboard/store/app-state';
import { Auth } from './auth';
import { LogIn } from './Store/Action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>) { }
  getState: Observable<any>;
  errorMessage: string | null;
  loginForm: FormGroup;
  username1 = localStorage.getItem("UserNamee");
  password1 = localStorage.getItem("Passworde");
  ngOnInit() {
    this.loginForm = this.fb.group({
      'UserNamee': [this.username1, [Validators.required]],
      'Passworde': [this.password1, Validators.required],
    });
    // this.getState.subscribe((state) => {
    //   this.errorMessage = state.errorMessage;
    // });
  }
  test: boolean = false;
  Auth = new Auth
  login(formData: NgForm) {

    var payload = this.loginForm.value as Auth
    this.store.dispatch(new LogIn(payload)); 
  
       
        this.router.navigate(['/home']);
     
  }
}
