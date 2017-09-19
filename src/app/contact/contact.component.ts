import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'contact',
  template: `<h3>{{ message }}</h3>`,
})
export class ContactComponent implements OnInit {
  public message: string

  constructor() {}

  ngOnInit() {
    this.message = 'Contact Us'
  }
}
