import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotAuthenticatedComponent } from '../401';
import { NotFoundComponent } from '../404';

const routes: Routes = [
    { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
    { path: 'downloads', loadChildren: () => import('../downloads/downloads.module').then(m => m.DownloadsModule) },
    { path: 'rankings', loadChildren: () => import('../rankings/rankings.module').then(m => m.RankingsModule) },
    { path: 'details', loadChildren: () => import('../details/details.module').then(m => m.DetailsModule) },
    { path: 'login', component: NotAuthenticatedComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
