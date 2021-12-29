import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, MaterialModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class UserModule { }
