import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { ClientsComponent } from './clients/clients.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { MarketsComponent } from './markets/markets.component'
import { SolutionsComponent } from './solutions/solutions.component'
import { WhyComponent } from './why/why.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'clients',
        component: ClientsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'markets',
        component: MarketsComponent,
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
      },
      {
        path: 'why-solaiya',
        component: WhyComponent,
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // <-- debugging purposes only
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
