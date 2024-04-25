import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-site-overview',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,],
  templateUrl: './site-overview.component.html',
  styleUrl: './site-overview.component.less'
})
export class SiteOverviewComponent {

}
