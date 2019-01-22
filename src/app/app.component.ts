import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  routLinks = ['/disposition', '/dashboard', '/heroes', '/nameforms'];

  tabs: any = {
    background: '',
    links: this.routLinks,
    activeLink: this.routLinks[0],
    label: this.routLinks
  };

  labelFunction (link: string): string {
    return link.replace(/\//g, '');
  }
}
