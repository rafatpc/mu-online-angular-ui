import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ModuleService } from './module.service';
import { ModuleConfig } from './module.types';

@Injectable({ providedIn: 'root' })
export class ModuleResolver implements Resolve<ModuleConfig> {
    constructor(private moduleService: ModuleService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ModuleConfig> | Promise<ModuleConfig> | ModuleConfig {
        const { name } = route.parent.params;
        const { path: module } = route.routeConfig;

        return this.moduleService.getModuleConfig(module, name);
    }
}
