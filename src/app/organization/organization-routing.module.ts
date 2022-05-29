import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { OrganizationModule } from './organization.module';

const routes: Routes = [
  {
    path: '',
    component: OrganizationComponent,
  },
];

@NgModule({
  imports: [OrganizationModule, RouterModule.forChild(routes)],
})
export class OrganizationRoutingModule {}
