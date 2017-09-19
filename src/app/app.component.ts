import { Component } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <app-body>
      <router-outlet></router-outlet>
    </app-body>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
