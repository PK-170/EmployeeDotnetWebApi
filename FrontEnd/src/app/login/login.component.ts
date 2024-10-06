import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

LoginObj: Login;
constructor()
{
  this.LoginObj = new Login();
}


onLogin(){
  console.log(this.LoginObj.EmilId)
  console.log(this.LoginObj.Password);
  
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