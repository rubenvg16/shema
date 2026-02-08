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
      fecha: '22 de Febrero, 2026',
      hora: '20:00',
      lugar: 'Playa Club',
      ciudad: 'Cancún, Quintana Roo',
      descripcion: 'Concierto especial a la orilla del mar',
      disponible: true
    },
    {
      fecha: '15 de Marzo, 2026',
      hora: '19:30',
      lugar: 'Teatro Metropolitano',
      ciudad: 'Ciudad de México',
      descripcion: 'Presentación acústica y minimalista',
      disponible: true
    },
    {
      fecha: '10 de Abril, 2026',
      hora: '21:00',
      lugar: 'Auditorio Nacional',
      ciudad: 'Ciudad de México',
      descripcion: 'Gran concierto de primavera',
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
