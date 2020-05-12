import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ModuleConfig } from './module.types';

@Injectable({ providedIn: 'root' })
export class ModuleService {
    constructor(private readonly http: HttpClient) { }

    getModuleConfig(module: string, name: string): Observable<ModuleConfig> {
        return this.http.get<ModuleConfig>(`${environment.apiUrl}/account/character/${name}/${module}`);
    }

    executeModule(module: string, name: string): Observable<null> {
        return this.http.post<null>(`${environment.apiUrl}/account/character/${name}/${module}`, {});
    }
}
