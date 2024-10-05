import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{
    path: '', component: LoginComponent, title: 'Login Page'
}


];

export default routes;