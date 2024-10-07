import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ToastrService, ToastNoAnimation } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

loginObj: Login;
loginResp: LoginResp;


constructor(private router: Router,  private http: HttpClient)
{
  this.loginObj = new Login();
  this.loginResp = new LoginResp();
  
}


onLogin(){
  
  this.http.post('http://localhost:5236/api/account/login', this.loginObj)
    .subscribe((res)=>{
            this.loginResp == res;
            this.router.navigateByUrl('/home-component');    
      
  },Error=>{
    //this.toastr.error("Invalid Username and/or Password");
    alert("Invalid Username and/or Password");
    console.log("Invalid Username");
  }
);  
}
  
}

export class Login{

  UserName: string;
  Password: string;

  constructor()
  {
    this.UserName = '';
    this.Password ='';
  }

}

export class LoginResp{
  userName: string;
  email: string;
  token: string;
  constructor()
  {
    this.userName = '';
    this.email = '';
    this.token = '';
  }


}