import { Location } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Testarena';
  routLinks = ['/disposition', '/dashboard', '/heroes', '/nameforms'];
  buttonActive = 'disposition';

  tabs: any = {
    background: '',
    links: this.routLinks,
    activeLink: this.routLinks[0],
    label: this.routLinks
  };

  constructor(private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.data.subscribe( params => console.log(params) );
   /*  let test = this.location.path(); */
  }

  ngAfterViewInit() {
  }

  labelFunction (link: string): string {
    return link.replace(/\//g, '');
  }

  activateButton(activeButton: string): void {
    this.buttonActive = activeButton;
  }
}
