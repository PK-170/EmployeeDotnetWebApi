import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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
  http = inject(HttpClient);

  constructor(){

    this.registerUserObj = new RegisterUserObj();
  }



  onRegisterMethod()
  {
    console.log(this.registerUserObj.UserName);
    console.log(this.registerUserObj.Email);
    console.log(this.registerUserObj.Password);

    this.http.post('http://localhost:5236/api/account/register', this.onRegisterMethod)
    .subscribe({
      next: (value) => {
        console.log(value);
      }
    })

    
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
