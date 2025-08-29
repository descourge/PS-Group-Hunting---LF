import { Component } from '@angular/core';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductDashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}