import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StyleClassModule, ButtonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landingPage';

  centralDoCliente() {
    window.open('http://www.centraldocliente.chipnews.com.br/clientes/login', '_blank');
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

  goToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
