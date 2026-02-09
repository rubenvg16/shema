import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conciertos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conciertos.component.html',
  styleUrl: './conciertos.component.css'
})
export class ConciertosComponent {
  conciertos = [
    {
      fecha: '11 de abril, 2026',
      hora: '',
      lugar: 'Gaudium Fest',
      ciudad: 'Canarias',
      descripcion: 'Festival de la resurreciíon',
      disponible: true
    },
    {
      fecha: '14 de Marzo, 2026',
      hora: '',
      lugar: 'Vivo, ¿Para Quién?',
      ciudad: 'Salamanca',
      descripcion: 'Congreso Diocesano de las Vocaciones',
      disponible: true
    },
    {
      fecha: '23 de Mayo, 2026',
      hora: '',
      lugar: 'Concierto Oración',
      ciudad: 'Valencia',
      descripcion: '',
      disponible: true
    },
    {
      fecha: 'Por Anunciar',
      hora: '--:--',
      lugar: 'Ubicación próxima',
      ciudad: 'Por confirmar',
      descripcion: 'Más fechas en diferentes ciudades',
      disponible: false
    }
  ];
}
