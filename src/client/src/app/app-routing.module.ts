import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriandisesListComponent } from './components/friandises-list/friandises-list.component';
import { AddFriandiseComponent } from './components/add-friandise/add-friandise.component';
import { FriandiseDetailsComponent } from './components/friandise-details/friandise-details.component';

const routes: Routes = [
  {path:'friandises',component:FriandisesListComponent},
  {path:'add-friandise',component:AddFriandiseComponent},
  {path:'friandises/:id',component:FriandiseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
