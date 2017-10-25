import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { ClientsComponent } from './clients/clients.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { MarketsComponent } from './markets/markets.component'
import { SolutionsComponent } from './solutions/solutions.component'
import { WhyComponent } from './why/why.component'
import { BodyComponent, FooterComponent, NavbarComponent } from './shared/ui'

import { AppRoutingModule } from './app.routing'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BodyComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    MarketsComponent,
    NavbarComponent,
    SolutionsComponent,
    WhyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'solaiya' }),
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
