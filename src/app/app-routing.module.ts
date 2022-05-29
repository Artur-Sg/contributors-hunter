import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './shared/components/layout/components/layout-base/layout-base.component';
import { RoutePath } from './shared/enums/route-path.enum';

const routes: Routes = [
  {
    path: RoutePath.Root,
    pathMatch: 'full',
    redirectTo: RoutePath.Organizations,
  },
  {
    path: RoutePath.Root,
    component: LayoutBaseComponent,
    children: [
      {
        path: RoutePath.Organizations,
        loadChildren: () =>
          import('./dashboard/dashboard-routing.module').then(({ DashboardRoutingModule }) => DashboardRoutingModule),
      },
      {
        path: `${RoutePath.Organizations}/:login`,
        loadChildren: () =>
          import('./organization/organization-routing.module').then(
            ({ OrganizationRoutingModule }) => OrganizationRoutingModule,
          ),
      },
      {
        path: RoutePath.Favorites,
        loadChildren: () =>
          import('./favorites/favorites-routing.module').then(({ FavoritesRoutingModule }) => FavoritesRoutingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
