import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'markets',
  template: `<h3>{{ message }}</h3>`,
})
export class MarketsComponent implements OnInit {
  public message: string

  constructor() {}

  ngOnInit() {
    this.message = 'Markets'
  }
}
