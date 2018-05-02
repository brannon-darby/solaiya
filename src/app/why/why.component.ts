import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'why-solaiya',
  template: `<h3>{{ message }}</h3>`,
})
export class WhyComponent implements OnInit {
  public message: string

  constructor() {}

  ngOnInit() {
    this.message = 'Why Solaiya?'
  }
}
