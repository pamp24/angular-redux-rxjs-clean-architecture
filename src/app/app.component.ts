import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutes } from './app.routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthRoutes } from './auth/auth.routes';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, 
      RouterOutlet, 
      RouterLink, 
      RouterLinkActive, 
      NzIconModule, 
      NzLayoutModule, 
      NzMenuModule,
      LayoutComponent,
      ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    
})

export class AppComponent {

  
}
