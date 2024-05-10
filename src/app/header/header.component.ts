import { Component } from '@angular/core';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NzPageHeaderModule, 
    NzMenuModule,
    NzSpaceModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  constructor(){}
  
}
