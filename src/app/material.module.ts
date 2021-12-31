import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule
    ]

})

export class MaterialModule { }