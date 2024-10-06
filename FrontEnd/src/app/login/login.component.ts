import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

LoginObj: Login;
constructor(private router: Router)
{
  this.LoginObj = new Login();
}


onLogin(){
  console.log(this.LoginObj.EmilId)
  console.log(this.LoginObj.Password);
   this.router.navigateByUrl('/home-component');
  
}
  
}

export class Login{

  EmilId: string;
  Password: string;

  constructor()
  {
    this.EmilId = '';
    this.Password ='';
  }

}