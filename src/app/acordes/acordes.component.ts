import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acordes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acordes.component.html',
  styleUrl: './acordes.component.css'
})
export class AcordesComponent {
  accordions = [
    {
      title: 'Canción 1',
      content: `Verso:
Am - F - C - G
Dm - G - Am - F

Pre-Coro:
C - G - Am - F

Coro:
C - G - F - Dm
G - C - F - Am`
    },
    {
      title: 'Canción 2',
      content: `Verso:
Em - A - D - G
Bm - E - A - D

Pre-Coro:
G - D - Em - A

Coro:
D - A - G - Bm
A - D - G - Em`
    },
    {
      title: 'Canción 3',
      content: `Verso:
Gm - Bb - F - Dm
Eb - Bb - Gm - F

Pre-Coro:
F - Dm - Gm - Bb

Coro:
Bb - F - Eb - Gm
Dm - Bb - F - Gm`
    }
  ];

  expandedIndex: number | null = null;

  toggleAccordion(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
