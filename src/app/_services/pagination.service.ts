import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { global } from '../_globals'

@Injectable({ providedIn: 'root' })
export class PaginationService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${global.apiUrl}`);
    }
}