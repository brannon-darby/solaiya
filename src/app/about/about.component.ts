import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'about',
  template: `<h3>{{ message }}</h3>`,
})
export class AboutComponent implements OnInit {
  public message: string

  constructor() {}

  ngOnInit() {
    this.message = 'About'
  }
}
