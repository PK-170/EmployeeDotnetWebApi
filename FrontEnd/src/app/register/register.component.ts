import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerUserObj: RegisterUserObj;
  //http = inject(HttpClient);

  constructor(private http: HttpClient){

    this.registerUserObj = new RegisterUserObj();
  }



  onRegisterMethod()
  {
    console.log(this.registerUserObj.UserName);
    console.log(this.registerUserObj.Email);
    console.log(this.registerUserObj.Password);

    //let headers = new Headers({ 'Content-Type': 'application/json' });
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    // const headersnew = new HttpHeaders();
    //  headersnew = headersnew.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post('http://localhost:5236/api/account/register', this.onRegisterMethod, httpOptions)
    .subscribe(
      (value) => {
        console.log(value);
      
  }); 

    
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
