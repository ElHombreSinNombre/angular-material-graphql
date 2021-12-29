import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    exports: [
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule
    ]

})

export class MaterialModule { }