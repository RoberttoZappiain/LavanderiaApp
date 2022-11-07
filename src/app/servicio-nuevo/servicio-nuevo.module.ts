import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioNuevoPageRoutingModule } from './servicio-nuevo-routing.module';

import { ServicioNuevoPage } from './servicio-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioNuevoPageRoutingModule
  ],
  declarations: [ServicioNuevoPage]
})
export class ServicioNuevoPageModule {}
