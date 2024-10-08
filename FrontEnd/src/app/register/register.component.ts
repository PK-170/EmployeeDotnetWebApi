import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerUserObj: RegisterUserObj;

  constructor(){

    this.registerUserObj = new RegisterUserObj();
  }



  onRegisterMethod()
  {
    console.log(this.registerUserObj.UserName);
    console.log(this.registerUserObj.Email);
    console.log(this.registerUserObj.Password);
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
