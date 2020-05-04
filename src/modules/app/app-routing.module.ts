import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotAuthenticatedComponent } from '../error-pages/401.component';
import { NotFoundComponent } from '../error-pages/404.component';

const routes: Routes = [
    { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
    { path: 'downloads', loadChildren: () => import('../downloads/downloads.module').then(m => m.DownloadsModule) },
    { path: 'rankings', loadChildren: () => import('../rankings/rankings.module').then(m => m.RankingsModule) },
    { path: 'details', loadChildren: () => import('../details/details.module').then(m => m.DetailsModule) },
    { path: 'register', loadChildren: () => import('../register/register.module').then(m => m.RegisterModule) },
    { path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountModule) },
    { path: 'login', component: NotAuthenticatedComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
