import { BrowserModule } from '@angular/platform-browser';
import { NgModule, provideZonelessChangeDetection } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './shared/routes/routes';
import { BookModule } from './book/book.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(routes),
    // feature modules
    BookModule
  ],
  // Angular v21+ defaults to zoneless; declared explicitly here for clarity.
  providers: [provideZonelessChangeDetection()],
  bootstrap: [AppComponent]
})
export class AppModule {}
