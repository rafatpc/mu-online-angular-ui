import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../404';

const routes: Routes = [
    { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
    { path: 'downloads', loadChildren: () => import('../downloads/downloads.module').then(m => m.DownloadsModule) },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
