import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'clients',
  template: `<h3>{{ message }}</h3>`,
})
export class ClientsComponent implements OnInit {
  public message: string

  constructor() {}

  ngOnInit() {
    this.message = 'Clients'
  }
}
