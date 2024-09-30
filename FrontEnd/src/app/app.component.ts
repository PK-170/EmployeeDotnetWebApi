import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  http = inject(HttpClient);
  data: any=[];
  editMode = false;

  ngOnInit(): void{
     this.getContacts();
  }

contactsForm = new FormGroup({
  name : new FormControl<string>("", [Validators.required]),
  email : new FormControl<string | null>(null),
  phone : new FormControl<string>(''),
  favorite : new FormControl<boolean>(false)
})


onFormSubmit(){
  
    const addContactRequest = {
      name : this.contactsForm.value.name,
      email: this.contactsForm.value.email,
      phone: this.contactsForm.value.phone,
      favorite: this.contactsForm.value.favorite
    }
    if(!this.editMode){
    this.http.post('http://localhost:5236/api/contact', addContactRequest)
    .subscribe({
      next: (value) => {
        console.log(value);
        this.contactsForm.reset();
      }
    })
  }else{
    this.http.put('http://localhost:5236/api/contact', addContactRequest)
    .subscribe({
      next: (value) => {
        console.log(value);
        this.ngOnInit();
        this.contactsForm.reset();
      }
    })
  }

    }

    onEdit(id: number){
      this.editMode = true;
      this.http.get(`http://localhost:5236/api/contact/${id}`)
      .subscribe((res:any) => {
             
        this.contactsForm = new FormGroup({
          name : new FormControl(res.name),
          email : new FormControl(res.email),
          phone : new FormControl(res.phone),
          favorite : new FormControl(res.favorite)
        })
        
      })
      

    }

    onDelete(id: number){
        
      this.http.delete(`http://localhost:5236/api/contact/${id}`)
      .subscribe({
        next: (value) => {
          alert("Are you sure you want Contact Deleted");
          this.ngOnInit();
        }
      })
    }



   getContacts()
  {
     this.http.get("http://localhost:5236/api/contact").subscribe(
      (data:any) => {
        this.data = data;
      }
     )

  
}

}
