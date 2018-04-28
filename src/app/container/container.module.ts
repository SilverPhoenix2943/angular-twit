import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';

@NgModule({
    imports: [
        SharedModule,
        ContainerRoutingModule
    ],
    declarations: [
        ContainerComponent
    ]
})
export class ContainerModule {}
