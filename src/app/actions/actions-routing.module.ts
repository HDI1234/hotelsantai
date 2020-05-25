import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'actions', redirectTo: 'actions/home', pathMatch: 'full'},
  { path: 'actions/home', component: HomeComponent },
  { path: 'actions/details/:roomsId', component: DetailsComponent },
  { path: 'actions/create', component: CreateComponent },
  { path: 'actions/update/:roomsId', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule { }
