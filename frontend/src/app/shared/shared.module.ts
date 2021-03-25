import { NgModule, Component } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ConfirmationService, MenuItem} from 'primeng/api';                  //api

@NgModule({
    declarations: [
    ],
    imports: [
        PRIMENG_IMPORTS,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        ConfirmationService
    ],
    exports: [
        PRIMENG_IMPORTS,
    ]
})
export class SharedModule { }