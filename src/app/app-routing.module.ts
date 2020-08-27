import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowUserComponent } from './show-user/show-user.component';


const routes: Routes = [
  {path: 'register', component: RegisterUserComponent},
  {path: 'show', component: ShowUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
