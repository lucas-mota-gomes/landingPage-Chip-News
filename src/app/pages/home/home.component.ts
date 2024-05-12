import { Component } from '@angular/core';
import { VideoComponent } from '../../component/video/video.component';
import { PricingComponent } from '../../component/pricing/pricing.component';
import { FeaturesComponent } from '../../component/features/features.component';
import { CallToActionComponent } from '../../component/call-to-action/call-to-action.component';
import { FaqComponent } from '../../component/faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoComponent, PricingComponent, FeaturesComponent, CallToActionComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
