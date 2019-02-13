import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcmRoutingModule } from './ecm-routing.module';
import { CreateNodeComponent } from './create-node/create-node.component';
import { ListNodeComponent } from './list-node/list-node.component';

@NgModule({
  declarations: [CreateNodeComponent, ListNodeComponent],
  imports: [
    CommonModule,
    EcmRoutingModule
  ],
})
export class EcmModule { }
