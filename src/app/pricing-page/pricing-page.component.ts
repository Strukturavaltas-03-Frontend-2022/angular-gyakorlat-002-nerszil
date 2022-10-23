import { Component, OnInit } from '@angular/core';

interface IPriceItem {
  name: string;
  price: number;
  options: string[];
  btnText: string;
}

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  priceTable: IPriceItem[] = [
    {
      name: 'Free',
      price: 0,
      options: ['10 tanuló', '2 GB tárhely', 'E-mail támogatás', 'Dokumentáció'],
      btnText: 'Ingyen regisztráció',
    },
    {
      name: 'Pro',
      price: 15,
      options: ['20 tanuló', '10 GB tárhely', 'Kiemelt e-mail támogatás', 'Dokumentáció'],
      btnText: 'Kezdő lépések',
    },
    {
      name: 'Enterprise',
      price: 29,
      options: ['100 tanuló', '100 GB tárhely', 'Telefonos és e-mail támogatás', 'Dokumentáció'],
      btnText: 'Kontakt',
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
