import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [ 
            MatButtonModule, 
            MatCheckboxModule,
            MatFormFieldModule
             ],

    exports: [ MatButtonModule, 
               MatCheckboxModule,
               MatFormFieldModule
              
             ]
})

export class MaterialModule { }