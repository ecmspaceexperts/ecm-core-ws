import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateNodeComponent} from './create-node/create-node.component';
import {ListNodeComponent} from './list-node/list-node.component';

const routes: Routes = [{ path: 'createnode', component: CreateNodeComponent },
  { path: 'listnode', component: ListNodeComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcmRoutingModule { }
