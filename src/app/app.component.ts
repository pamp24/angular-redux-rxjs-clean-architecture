import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    imports: [CommonModule, 
      RouterOutlet, 
      RouterLink, 
      RouterLinkActive, 
      NzIconModule, 
      NzLayoutModule, 
      NzMenuModule,
      LayoutComponent,
      HeaderComponent,
      FooterComponent
      ]
})
export class AppComponent {
  
}
