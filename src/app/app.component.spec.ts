import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
// Side-effect import only: the Vitest/esbuild test builder (Angular CLI 22.2.0)
// only resolves a component's NgModule scope from modules reachable in this
// spec's own import graph, so AppModule must be imported here even if unused.
// See https://github.com/angular/angular-cli/issues/34231
import './app.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
      // Shallow test: AppComponent's own child selectors (app-toolbar, app-navigation,
      // mat-sidenav-*) are covered by their own component specs.
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
