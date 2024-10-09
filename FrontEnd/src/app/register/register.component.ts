import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerUserObj: RegisterUserObj;

  constructor(private http: HttpClient, private router: Router){

    this.registerUserObj = new RegisterUserObj();
  }



  onRegisterMethod()
  {
    console.log(this.registerUserObj.UserName);
    console.log(this.registerUserObj.Email);
    console.log(this.registerUserObj.Password);

    this.http.post('http://localhost:5236/api/account/register', this.registerUserObj)
    .subscribe((res)=>{
      this.router.navigateByUrl('/login-component'); 
}
,Error=>{
alert("Invalid Username and/or Password");
console.log("Invalid password");
}
);  
  }
}

export class RegisterUserObj{
  UserName: string;
  Email: string;
  Password: string;

  
  constructor() {
    this.UserName = '';
    this.Email = '';
    this.Password = '';
    
  }
}
