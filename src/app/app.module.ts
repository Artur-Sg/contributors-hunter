import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './shared/components/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingIndicatorModule } from './shared/components/loading-indicator/loading-indicator.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingIndicatorInterceptor } from './shared/components/loading-indicator/interceptors/loading-indicator-interceptor.interceptor';
import { RestApiService } from './shared/services/rest-api/rest-api.service';
import { SearchService } from './shared/services/search/search.service';
import { CurrentPageStorageService } from './shared/services/current-page-storage/current-page-storage.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    LoadingIndicatorModule,
    NgbModule,
  ],
  providers: [
    RestApiService,
    SearchService,
    CurrentPageStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
