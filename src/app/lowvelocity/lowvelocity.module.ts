import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { LowVelocityRoutingModule } from './lowvelocity-routing.module';
import { LowVelocityComponent } from './lowvelocity.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    LowVelocityRoutingModule
  ],
  declarations: [
    LowVelocityComponent
  ]
})
export class LowVelocityModule { }
