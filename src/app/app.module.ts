import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { CardScrollerComponent } from './components/cards/card-scroller/card-scroller.component';
import { CardComponent } from './components/cards/card/card.component';
import { ComicsScrollerComponent } from './components/cards/comics-scroller/comics-scroller.component';
import { ComicsCardComponent } from './components/cards/comics-card/comics-card.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { StreamingComponent } from './pages/streaming/streaming.component';
import { ReadComponent } from './pages/read/read.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardScrollerComponent,
    CardComponent,
    ComicsScrollerComponent,
    ComicsCardComponent,
    FooterComponent,
    AboutComponent,
    StreamingComponent,
    ReadComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxExtendedPdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
