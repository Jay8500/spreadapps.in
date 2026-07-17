import { Component } from '@angular/core';

interface EcoChild {
  name: string;
  status: string;
  barStyle: string;
  future?: boolean;
}

@Component({
  selector: 'app-ecosystem',
  standalone: true,
  imports: [],
  templateUrl: './ecosystem.html',
  styleUrl: './ecosystem.css',
})
export class Ecosystem {
  children: EcoChild[] = [
    {
      name: 'Circles',
      status: 'Own product',
      barStyle: 'linear-gradient(90deg,#7C6FF5,#F0A8DC,#F2896B,#22B8A0)',
    },
    { name: 'Hospital MS', status: 'Multi-tenant', barStyle: '#0F766E' },
    { name: 'Future app', status: 'Reserved', barStyle: '', future: true },
  ];
}
