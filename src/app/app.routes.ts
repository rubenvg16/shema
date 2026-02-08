import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcordesComponent } from './acordes/acordes.component';
import { ConciertosComponent } from './conciertos/conciertos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acordes', component: AcordesComponent },
  { path: 'conciertos', component: ConciertosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
