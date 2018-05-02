import { Component } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-footer',
  template: `
    <div class="container-fluid bg-info py-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h5>SOLUTIONS</h5>
            <hr class="my-2">
            <h6>Consulting</h6>
            <ul>
              <li><a routerLink="solutions">Business Development</a></li>
              <li><a routerLink="solutions">Business Process and Operations Support</a></li>
            </ul>
            <h6>Systems</h6>
            <ul>
              <li><a routerLink="solutions">Cyber Security</a></li>
              <li><a routerLink="solutions">Knowledge Management and Analytics</a></li>
              <li><a routerLink="solutions">IoT Connected Solutions</a></li>
            </ul>
            <h6>Talent</h6>
            <ul>
              <li><a routerLink="solutions">Subject Matter Expertise</a></li>
              <li><a routerLink="solutions">Supplemental Staffing</a></li>
              <li><a routerLink="solutions">Personnel Training and Certification</a></li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h5>CONTACT INFORMATION</h5>
            <hr class="my-2">
            <div class="text-left row">
              <div class="col-2">
                <i class="fa fa-fw fa-map-marker"></i>
              </div>
              <div class="col-10">
                664 A South Military Trail
                <br>
                Deerfield Beach, FL 33442
              </div>
              <div class="col-2">
                <i class="fa fa-fw fa-phone"></i>
              </div>
              <div class="col-10">
                <a href="tel:1-954-725-7544">1-954-725-7544</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="row align-items-center w-100">
        <div class="col-6 text-center">
          &copy; 2017-{{ currentYear }} Solaiya | All Rights Reserved
        </div>
        <div class="col-6 text-center">
          <span class="social-buttons ml-auto">
            <a *ngFor="let item of socialButtons"
               [class]="item.class"
               [href]="item.link">
               <i [class]="item.icon"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  `,
})
export class FooterComponent {
  public socialButtons = [
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-facebook-official',
      class: 'btn btn-sm btn-info m-1',
    },
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-twitter-square',
      class: 'btn btn-sm btn-info m-1',
    },
    {
      link: '',
      icon: 'fa fa-lg fa-fw fa-linkedin-square',
      class: 'btn btn-sm btn-info m-1',
    },
  ]

  public currentYear = new Date().getFullYear()
}
