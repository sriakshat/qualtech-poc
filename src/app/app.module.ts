import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './pagination';
import { LoginComponent } from './login';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPaginationModule
    ],
    declarations: [
        AppComponent,
        PaginationComponent,
        LoginComponent
    ],
    providers: [
        NgxPaginationModule,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // To replicate Fake Login API with JWT Token
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }