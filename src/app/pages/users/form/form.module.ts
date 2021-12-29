import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, MaterialModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class LoginModule { }
