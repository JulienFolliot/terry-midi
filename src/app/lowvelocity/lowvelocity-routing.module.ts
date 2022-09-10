import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { LowVelocityComponent } from './lowvelocity.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/low-velocity', pathMatch: 'full' },
    { path: 'low-velocity', component: LowVelocityComponent, data: { title: marker('LowVelocity') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LowVelocityRoutingModule { }
