import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import {CardComponent} from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CardComponent, LoginComponent], 
    imports: [
        PRIMENG_IMPORTS,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[],
    exports: [
        PRIMENG_IMPORTS,
        CardComponent,
        LoginComponent
    ]
})
export class SharedModule { }
