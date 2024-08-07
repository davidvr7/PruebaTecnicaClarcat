import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './_components/user/list-user/list-user.component';
import { CreateUserComponent } from './_components/user/create-user/create-user.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/HR', pathMatch: 'full' }, 
  { path: 'home/:department', component: ListUserComponent},
  { path: 'create-user', component: CreateUserComponent },
  { 
    path: 'user-detail/:id', 
    loadChildren: () => import('./_components/user/user-details/user-details.module').then(m => m.UserDetailModule)
  },
  { path: '404', component: PageNotFoundComponent },  
  { path: '**', redirectTo: '/404' }  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
