import { BrowserModule } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function isBot(navigator, platformId) {
  return isPlatformServer(platformId) ? true : intersectionObserverPreset.isBot(navigator, platformId);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset,
      isBot,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
