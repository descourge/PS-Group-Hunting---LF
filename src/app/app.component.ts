import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PS Grupo Hunting';
}
