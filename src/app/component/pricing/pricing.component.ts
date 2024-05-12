import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ValorBrPipe } from '../../pipe/valor-br.pipe';
import { IPlano, IPricing } from './pricing.interfaces';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ButtonModule, CarouselModule, ValorBrPipe],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans: IPricing = {
    internet: [
      {
        name: '200 MEGA',
        upload: '70 MEGA',
        popular: false,
        price: 69.90,
        features: [
          {
            name: 'PLANO START',
            icon: 'pi pi-check'
          },
          {
            name: '100% FIBRA ÓPTICA',
            icon: 'pi pi-check'
          },
          {
            name: 'OPTICAL NETWORK UNIT (ONU) GRÁTIS',
            icon: 'pi pi-check'
          },
          {
            name: 'IPV4 E IPV6',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA STREAMING ON DEMAND',
            icon: 'pi pi-check'
          }
        ]
      },
      {
        name: '300 MEGA',
        upload: '100 MEGA',
        popular: true,
        price: 89.90,
        features: [
          {
            name: 'PLANO FLASH',
            icon: 'pi pi-check'
          },
          {
            name: '100% FIBRA ÓPTICA',
            icon: 'pi pi-check'
          },
          {
            name: 'WI-FI 5 PLUS ONT',
            icon: 'pi pi-check'
          },
          {
            name: 'IPV4 E IPV6',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA STREAMING',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA TV 63 CANAIS HD',
            icon: 'pi pi-check'
          }
        ]
      },
      {
        name: '400 MEGA MEGA',
        upload: '150 MEGA',
        popular: false,
        price: 99.90,
        features: [
          {
            name: 'PLANO ULTRA',
            icon: 'pi pi-check'
          },
          {
            name: '100% FIBRA ÓPTICA',
            icon: 'pi pi-check'
          },
          {
            name: 'WI-FI 5 PLUS ONT',
            icon: 'pi pi-check'
          },
          {
            name: 'IPV4 E IPV6',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA STREAMING',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA TV 97 CANAIS HD',
            icon: 'pi pi-check'
          }
        ]
      },
      {
        name: '500 MEGA',
        upload: '200 MEGA',
        popular: false,
        price: 119.90,
        features: [
          {
            name: 'PLANO POWER',
            icon: 'pi pi-check'
          },
          {
            name: '100% FIBRA ÓPTICA',
            icon: 'pi pi-check'
          },
          {
            name: 'WI-FI 5 PLUS ONT',
            icon: 'pi pi-check'
          },
          {
            name: 'IPV4 E IPV6',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA STREAMING',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA TV 134 CANAIS HD',
            icon: 'pi pi-check'
          }
        ]
      },
      {
        name: '700 MEGA',
        upload: '300 MEGA',
        popular: false,
        price: 139.90,
        features: [
          {
            name: 'PLANO FAST',
            icon: 'pi pi-check'
          },
          {
            name: '100% FIBRA ÓPTICA',
            icon: 'pi pi-check'
          },
          {
            name: 'WI-FI 5 PLUS ONT',
            icon: 'pi pi-check'
          },
          {
            name: 'IPV4 E IPV6',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA STREAMING',
            icon: 'pi pi-check'
          },
          {
            name: 'FIBRA TV 153 CANAIS FHD',
            icon: 'pi pi-check'
          }
        ]
      },
      {
        name: 'GAMER 1 GIGA',
        upload: '1 GIGA',
        popular: false,
        price: 199.90,
        features: [
          {
            name: 'IP PUBLICO',
            icon: 'pi pi-check'
          },
          {
            name: 'PING MAIS BAIXO',
            icon: 'pi pi-check'
          },
          {
            name: 'UPLOAD = DOWNLOAD',
            icon: 'pi pi-check'
          },
          {
            name: 'WIFI 6 PLUS ONT',
            icon: 'pi pi-check'
          },
          {
            name: 'MELHORES ROTAS',
            icon: 'pi pi-check'
          },
          {
            name: 'NAT-1',
            icon: 'pi pi-check'
          }
        ]
      }
    ],
    combo: [
      {
        name: "COMBO I",
        upload: "100 MEGA",
        download: "300 MEGA",
        price: 139.90,
        description: "*PAGAMENTO VIA PIX ATÉ O VENCIMENTO",
        features: [
          { "name": "WI-FI PLUS 5 EM COMODATO", "icon": "pi pi-check" },
          { "name": "INTERNET 12 GB NO MÓVEL", "icon": "pi pi-check" },
          { "name": "LIGAÇÕES ILIMITADAS NO MÓVEL", "icon": "pi pi-check" },
          { "name": "ACUMULO DO MÊS ANTERIOR", "icon": "pi pi-check" },
          { "name": "PORTABILIDADE GRATUITA", "icon": "pi pi-check" },
          { "name": "FIBRA STREAMING + TV", "icon": "pi pi-check" },
          { "name": "TELEMEDICINA SULAMERICA", "icon": "pi pi-check" },
          { "name": "FIDELIDADE DE 12 MESES", "icon": "pi pi-check" },
          { "name": "SEM SURPRESA NA CONTA", "icon": "pi pi-check" },
          { "name": "SEM CONSUMO DE DADOS", "icon": "pi pi-check" }
        ]
      },
      {
        name: "COMBO II",
        upload: "150 MEGA",
        download: "400 MEGA",
        price: 149.90,
        popular: true,
        description: "*PAGAMENTO VIA PIX ATÉ O VENCIMENTO",
        features: [
          { "name": "WI-FI PLUS 5 EM COMODATO", "icon": "pi pi-check" },
          { "name": "INTERNET 17 GB NO MÓVEL", "icon": "pi pi-check" },
          { "name": "LIGAÇÕES ILIMITADAS NO MÓVEL", "icon": "pi pi-check" },
          { "name": "ACUMULO DO MÊS ANTERIOR", "icon": "pi pi-check" },
          { "name": "PORTABILIDADE GRATUITA", "icon": "pi pi-check" },
          { "name": "FIBRA STREAMING + TV", "icon": "pi pi-check" },
          { "name": "TELEMEDICINA SULAMERICA", "icon": "pi pi-check" },
          { "name": "FIDELIDADE DE 12 MESES", "icon": "pi pi-check" },
          { "name": "SEM SURPRESA NA CONTA", "icon": "pi pi-check" },
          { "name": "SEM CONSUMO DE DADOS", "icon": "pi pi-check" }
        ]
      },
      {
        name: "COMBO III",
        upload: "200 MEGA",
        download: "500 MEGA",
        price: 159.90,
        description: "*PAGAMENTO VIA PIX ATÉ O VENCIMENTO",
        features: [
          { "name": "WI-FI PLUS 5 EM COMODATO", "icon": "pi pi-check" },
          { "name": "INTERNET 25 GB NO MÓVEL", "icon": "pi pi-check" },
          { "name": "LIGAÇÕES ILIMITADAS NO MÓVEL", "icon": "pi pi-check" },
          { "name": "ACUMULO DO MÊS ANTERIOR", "icon": "pi pi-check" },
          { "name": "PORTABILIDADE GRATUITA", "icon": "pi pi-check" },
          { "name": "FIBRA STREAMING + TV", "icon": "pi pi-check" },
          { "name": "TELEFONIA FIXA ILIMITADA", "icon": "pi pi-check" },
          { "name": "TELEMEDICINA SULAMERICA", "icon": "pi pi-check" },
          { "name": "FIDELIDADE DE 12 MESES", "icon": "pi pi-check" },
          { "name": "SEM CONSUMO DE DADOS", "icon": "pi pi-check" }
        ]
      }
    ]
  };

  planTypes = [
    'Combo',
    'Internet'
  ];

  selectedPlan: IPlano[] | any = this.plans.combo;

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  selectPlan(type: string) {
    switch (type) {
      case 'Combo':
        this.selectedPlan = this.plans.combo;
        break;
      case 'Internet':
        this.selectedPlan = this.plans.internet;
        break;
      case 'TV por Assinatura':
        this.selectedPlan = this.plans.tv;
        break;
      case 'Telefonia Fixa':
        this.selectedPlan = this.plans.telefoniaFixa;
        break;
      case 'Telefonia Móvel':
        this.selectedPlan = this.plans.telefoniaMovel;
        break;
    }
  }
}
