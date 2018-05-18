import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatIconModule } from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule,
    ],
    declarations: [],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class SharedModule {}
