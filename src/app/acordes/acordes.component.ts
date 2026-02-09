import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-acordes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './acordes.component.html',
  styleUrl: './acordes.component.css'
})
export class AcordesComponent {
  searchTerm: string = '';

    accordions: any[] = [
    {
      title: 'Hoy te doy gracias',
      image: 'assets/Hoy_te_doy_gracias.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/2HgqgGx2DV9RgX2j2yMQyN?si=801277fc68874499',
      youtube: 'https://www.youtube.com/watch?v=v1X2bm1IppQ',
      content: `<strong>Do</strong>
Hoy te doy gracias
                        <strong>Fa</strong>
Por estar tan cerca
<strong>Do</strong>
Por tu presencia
                        <strong>Fa</strong>
Que nunca se aleja
<strong>Lam</strong>
En este pan,
    <strong>Mim                         Fa</strong>
en tu amor aquí escondido
                    <strong>Sol</strong>
Gracias Señor
                                    <strong>Do</strong>
por siempre estar conmigo
<strong>
Do                         Fa
Hoy te doy gracias
Do                         Fa
Hoy te doy gracias
</strong>
Hoy te doy gracias
Por tu fiel cuidado
Por tus promesas
Que me han guiado
En cada día,
en cada paso que he vivido
Gracias Señor
por siempre estar conmigo`
    },
    {
      title: 'Eres tu',
      image: 'assets/Eres_tu.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/584AzaxkOr98skUhI3IFVG?si=35ff753ba04b45e0',
      youtube: 'https://www.youtube.com/watch?v=I6sjq0jUL5Y',
      content: `<strong>La</strong>
En medio de la tormenta
Cuando no tengo la fuerza
         <strong>Re</strong>
¿Eres tu?
 
<strong>La</strong>
¿Eres tu quien me guía?
¿Eres tu mi alegría?
         <strong>Re</strong>
¿Eres tu?
 
<strong>La</strong>
No entiendo a veces tus planes
No entiendo esas señales
         <strong>Re</strong>
¿Eres tu?

<strong>La</strong>
Si eres tu la respuesta
Dime por qué no contestas
         <strong>Re</strong>
¿Eres tu?

<strong>Sim                 Mi
Necesito saber
                             La             Mi             Fa#m
A veces soy de piedra, cierro los ojos
                           Re        La     Mi        Fa#m
Contigo de la mano me dejo llevar
                 Re                La       Mi         Fa#m
Ya me aparte de todo, esto es distinto
                 Re             La     Mi             Fa#m Re
Quiero sentirte cerca en la oscuridad
</strong>

Cuando amanezco sin nada
Y siento esa mirada
¿Eres tu?

Cuando me encuentro aquí abajo
Pero siento tu abrazo
¿Eres tu?

¿Quienes toda esta gente?
¿Por qué siguen y no entienden?
Si Eres tu

¿Por qué me siento vacío?
Necesito estar contigo
Eres tu`
        },
    {
      title: 'Enseñame',
      image: 'assets/Enseñame.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/0IvWXZ4KBFM7Qdw7rpVHcv?si=61cf45fe24db401d',
      youtube: 'https://www.youtube.com/watch?v=qS1lfkXsm-0',
      content: `<strong>Lam                             Fa                 Do-Sol</strong>
Camino despacio camino sin prisa
<strong>Lam                             Fa                 Do-Sol</strong>
Te tengo a mi lado no pienso parar
<strong>Lam                             Fa                 Do-Sol</strong>
Grito con fuerza dentro de este abismo
<strong>Lam                             Fa                 Do-Sol</strong>
No se como hacerlo, enseñame a andar

<strong>Lam     Fa Do-Sol
Enseñame Enseñame
</strong>
Se que no estoy, necesito saberlo
Yo te confio, te quiero buscar
Quiero volver a sentirme tranquilo
Pero te juro que no puedo más
<strong>
Enséñame, Enséñame
</strong>
<strong>Fa                         Sol                     Lam</strong>
Miento, estoy perdido y no encuentro
<strong>Lam                 Sol                 Fa</strong>
Ese salida en tus tiempos
<strong>Fa                         Sol                     Lam Sol</strong>
Y sé que no puedo parar
Miento, cuando te digo perfecto
No es verdad pero me miento
Me digo no puedo parar
<strong>
Enseñame, Enséñame
</strong>
Quiero volver a verte
Volver a ti
Te buscaré sin miedo
Seguir en ti `
        },
      {
      title: 'En medio',
      image: 'assets/En_medio.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/0CC7QDfYdFJGR1Ev35T8Jk?si=1bfa31061c3b48df',
      youtube: 'https://www.youtube.com/watch?v=EmeXrsIUW4Q',
      content: `<strong>La</strong>
En medio de esta multitud empapada
                                <strong>Re</strong>
yo estoy seca de verdad
<strong>La</strong>
Pendiente de otras miradas
                                <strong>Re</strong>
Cosas varias de mi temporal

<strong>Sim                             La</strong>
Y Ahí estas tu que no fallas Y que aguardas
                                                  <strong>Re</strong>
por si tengo un momento de lucidez
<strong>Sim</strong>
Siempre me haces ver el mar
                                                <strong>La</strong>
Y no se porque me empeño en no ver

En medio de esta gente acelerada
Yo voy siempre al compás
Sin tiempo para nada y mucho menos
Para quien quiere de verdad

Ahí estas tú con tu paz
Con tu calma
Con los brazos siempre abiertos para
volver
Con tu mano soy mejor
Y no se porque me empeño en no ver
<strong>
La                                                Re
Te buscaré Hasta encontrar tu voz
Re                                                La
Te buscaré hasta encontrar tu voz</strong> `
        },
     {
      title: 'Quien diga que Dios',
      image: 'assets/Quien_diga_que_Dios.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/2ihE44zhTw6XaTL1exOOxV?si=8d38aba1823e401c',
      youtube: 'https://www.youtube.com/watch?v=C-Lmr3C0-kY',
      content: `<strong>Sol</strong>
Quien diga que Dios
    <strong>Do</strong>
ha muerto
  <strong>Sol</strong>
Que salga a la luz
     <strong>Do</strong>
Y vea

<strong>Do                         Re</strong>
Si el mundo es o no tarea
    <strong>Sol         Mim             Lam</strong>
de un Dios que sigue despierto
<strong>Do                      Re         Sol</strong>
con la misión de amar

Quien diga que Dios
No está aquí
Que mire mi vida
Y vea

Si es fruto de amor
De estar, de sentir, de estar a mi lado
Con la misión de amar `
    },
  {
      title: 'Ser misión',
      image: 'assets/Ser_mision.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/2e58sRpAImVelEV9NbTdK8?si=49381825c6054156',
      youtube: 'https://www.youtube.com/watch?v=6HrW1xTKQ90&list=RD6HrW1xTKQ90&start_radio=1',
      content: `<strong>Mi                                             La</strong>
Quiero saber qué soy yo para ti
<strong>Mi                                             La</strong>
¿Dónde me has traido? ¿Qué hay que descubrir?
<strong>Fa#m             La                      Mi</strong>
No lo entiendo ¿que hago aqui?
<strong>Fa#m             La                      Mi</strong>
¿Qué misión tienes para mi?

<strong>Mi                                              La</strong>
Dime Señor que tengo que saber
<strong>Mi                                              La</strong>
Ser discípulo de ti para aprender
<strong>Fa#m             La                             Mi</strong>
Yo me pregunto ¿qué hago aquí?
<strong>Fa#m             La                             Mi</strong>
Dime ¿qué plan tienes para mi?
<strong>
La         Mi (La)
Ser misión,
                            La          Mi
Ser un reflejo de tu plan
                             La           Mi
Ser llama viva para los demás
Y unidos todos
Re                                     Mi
ser respuesta de tu voluntad
</strong>

Me has llamado por mi nombre
Tengo claro que esto no es casualidad
Yo me pregunto que hago aquí
Dime que plan tienes para mi

                <strong>Fa#m                     La</strong>
Ayuda a encontrar tu vocación
            <strong>Mi</strong>
A transformar mi realidad
                    <strong>Fa#m                     La</strong>
Todo lo que en mi vida ya cambio
                                    <strong>Mi</strong>
Que se hago en mi según tu voluntad `
        },
     {
      title: 'La puerta está abierta ',
      image: 'assets/La_puerta_esta_abierta.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/0fBsVLRJ4yfiEeBQGBKHea?si=2dbb7ff553cb44fb',
      youtube: 'https://www.youtube.com/watch?v=N0juMicyyIs',
      content: `<strong>Mim             Do</strong>
Saber confiar
<strong>Sol                           Si7</strong>
Poder respirar tranquilo en el mar
Porque el vive en mí
Porque su voluntad me hace resistir

Cuando llegan los miedos
Mis cimiento mi guarida
Tu seguridad
me descubre la nueva vida

<strong>Do             Sol</strong>
Siempre está
<strong>            Si                     Mim</strong>
Deja que empiece a pasar
Siempre esta
Que haría él en mi lugar

<strong>Do                     Sol
Sueña y despierta
                 Si                     Mim
Porque Cristo vive en ti
La puerta está abierta
Bienvenido a ser feliz
Un tesoro un misterio que descubrir
Un regalo para ti
</strong>
Dejarse llevar
Andar por el mundo para iluminar
Él muestra su plan en mi
Todo lo hace nuevo para vivir

Cuando llegan los miedos
Saber cuando y donde podré sanar
Yo te seguiré
Porque este camino me llena`
        },
    {
      title: 'No miro atrás',
      image: 'assets/No_miro_atras.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/2LWnBbjHIR10AKRvkmgUMo?si=8fb0b0209c864c5d',
      youtube: 'https://www.youtube.com/watch?v=YMqUYC4HivA',
      content: `<strong>Si sus6 9             Si sus6</strong>
Remo mar adentro
Busco mi lugar
Se que no estoy solo
En mi caminar

<strong>Lam                 Si sus6
Te siento tan cerca
No miro atrás
Eres mi fuerza
Gracias por estar
</strong>

Eres mi barca
En este mar
Eres mis alas
Cuando he de volar `
        },
    {
      title: 'Alegres y contentos',
      image: 'assets/Alegres_y_Contentos.jpg',
      spotify: 'https://open.spotify.com/intl-es/track/4XbpKdgSv2vtrZNgBu1E3a?si=4421ee2f25d1425d',
      youtube: 'https://www.youtube.com/watch?v=tYCRntDIF5s',
      content: `<strong>Do                     Sol</strong>
Alegres y contentos
<strong>Re                             Mim</strong>
Nos quiere nuestro Dios
<strong>Do                             Sol</strong>
Porque asi armaremos lio
                 <strong>Re</strong>
Desde el corazón

Sirviendo a los más pobres
San Vicente nos verá
Como una sola familia
Y en comunidad
<strong>
Do                     Sol
Así juntos creceremos
Do                             Sol
Compartiendo nuestro pan
Lam                     Mim
Con una sola misión
             (Fa) Re
La de amar
</strong>

El bien no hace ruido
El ruido no hace bien
Solo miren con amor
Haciendo el plan de Dios

Buscando su presencia
En cada realidad
Nuestra vida de servicio
Su palabra llenará `
        },
    {
      title: 'Tu Hogar',
      image: 'assets/Tu_hogar.jpg',
      spotify: 'https://open.spotify.com/album/3EuVifu2X8jEBKvHr4P69r?si=mQNqLqyiTDaU0Bh3BUIxEQ',
      youtube: 'https://www.youtube.com/watch?v=DMhliIru3Cs',
          content: `<strong>Mi                       La</strong>
Cierro los ojos te siento en mi interior
<strong>Mi                       La</strong>
Es un suspiro la brisa de tu amor
<strong>Mi                       La</strong>
Sorprendete y busca ese lugar
<strong>Mi                       La</strong>
Encuentrale y no temas
<strong>
Mira la luz aquí está
Calla siente su voluntad
Mira la luz aquí está
Calla siente su voluntad
Tranquilo es tu hogar, es tu hogar
</strong>
Es más completa mi vida junto a ti
Siempre dibujas el sendero a seguir
Me adentro en él, el cielo ya
abrecé
Te creo en mi, es mi fe`
        },
     {
      image: 'assets/Mi_Talento.jpg',
      title: 'Mi talento',
      spotify: 'https://open.spotify.com/album/2wAD4peXC8EmDcMAChHdur?si=73TusPtuQWqgyBjOdEh-vg',
      youtube: 'https://www.youtube.com/watch?v=9OatZTxbNbk',
      content: `<strong>La                     Re</strong>
Cuanto amor me das
<strong>Mi                  La</strong>
cuanto amor recibo de ti
<strong>Re</strong>
fuerzas para andar
<strong>Mi             La</strong>
y para compartir

<strong>Re</strong>
Dios nos da cada talento
<strong>Mi                             La</strong>
por que debemos trabajar
para que pueda su reino
crecer cada día más

y aunque a veces siento como
mi talento esta enterrado
Dios me mira firmemente
me dice que él esta a mi lado

                            <strong>Re
yo le entrego mi talento
    Mi                             La
que me llene de su luz
                        Re
todos somos instrumentos
Mi                         La
seguidores de Jesús</strong>

Cuanto amor me das
cuanto amor recibo de ti
fuerzas para andar
y para compartir

Él es sol de medio día
el es un nuevo comienzo
Siento a dios como camina
ayudando en el sendero`
        },
    {
      title: 'En ti está mi fuerza',
      image: 'assets/En_ti_esta_mi_fuerza.jpg',
      spotify: 'https://open.spotify.com/album/4wexvPUdmcSjFEDRsWTef7?si=0fwugxU8T2KxZTFaKXCjJA',
      youtube: 'https://www.youtube.com/watch?v=udG0Nd7mhKM',
      content: `
"Siento Señor, que en ti está mi fuerza, en tu calor"
<strong>Do</strong>
Quiero verte conmigo,
<strong>Mi</strong>
quiero que seas mi amigo
<strong>Lam                             Fa</strong>
Quiero sentirte en cada amanecer

<strong>Do</strong>
En esas noches tristes
<strong>Mi</strong>
En esos dias grises
<strong>Lam</strong>
En el momento
                <strong>Fa</strong>
en el que siento la soledad

<strong>Do             Mi         Lam Fa</strong>
Y vuelvo a caer levántame
<strong>Do             Mi         Lam Fa</strong>
Creo que empiezo a ver, ayudame
<strong>Do             Mi         Lam Fa</strong>
Ya te encuentro aquí, quiero vivir
<strong>Do             Mi</strong>
Ser feliz
<strong>
Do     Mi         Lam Fa         Do
Creo Señor, en tu naturaleza,
Mi         Lam Fa
en tu amor
Do     Mi         Lam Fa         Do
Siento Señor, que en ti está mi fuerza
Mi         Lam Fa
En tu calor

Lalalalalalalala
</strong>
Contigo lo puedo todo
eres mi gran tesoro
quiero que estes tan cerca
para así caminar

Cuando no tengo nada
cuando faltan palabras
en la oración descubro
que en ti mi fuerza está

Y vuelvo a caer...`
        },
     {
      title: 'Confía y ya está',
      image: 'assets/Confía_y_ya_esta.jpg',
      spotify: 'https://open.spotify.com/album/2kwxZqO46KPv4WBa3GmJcv?si=69vIzgQYT9aJsF7EGveooA',
      youtube: 'https://www.youtube.com/watch?v=R0bWBNWAjjg',
      content: `<strong>Do                 Re7        Fa                 Do</strong>
Como esa llama, que ilumina al pasar
Como el secreto que tienes que contar
Como ese olor que se recuerda al hogar
Así es el Padre, Confia y ya está

<strong>Confia… nada más</strong>

Como ese abrazo que sorprende
Como esa risa que no puedes callar
Esa mirada que te dice algo más
Así es el Padre, Confia y ya está

<strong>Confia… nada más</strong> `
        },
    {
      title: 'No tengais miedo',
      image: 'assets/No_Tengais_Miedo.jpg',
      spotify: 'https://open.spotify.com/album/32VZgYi9mwwqKIcFj9m1br?si=ea_cC8QYRyWeInv24kqb3A',
      youtube: 'https://www.youtube.com/watch?v=w1ceAzDHOTc',
      content: `<strong>Mi       La       Mi</strong>
Id solo con un bastón
  <strong>La                                Si</strong>
y unas sandalias, y una túnica
Pues mi Padre no nos abandonará
A la hora, de la tempestad

<strong>
Mi     Re         La
No tengais miedo,
Mi     La     Si
siempre confiad
Mi         La
Yo estoy con vosotros
La     Si     Mi
Nada malo os va pasar
</strong>
No temas, confía y salta
Pues mi Padre también está
En ambientes insólitos
A nuestro lado, cuidándonos `
    },
    {
      title: 'Contigo Está',
      image: 'assets/Contigo_esta.jpg',
      spotify: 'https://open.spotify.com/album/4pf5E5QOgDVD8O1xej9Qqd?si=P10FvSIbRya2QxLLorfDBg',
      youtube: 'https://www.youtube.com/watch?v=VqA8kxlH_eE',
          content: `<strong>Sol Re Mim. Do</strong>
      
Vamos a celebrar
Que Jesús es Amor
El Espíritu que hoy está en ti
Nos da fuerza y calor

Bienvenido a tu hogar
A esta comunidad
Deja todo y ven conmigo
Vamos a comenzar

<strong>Es Jesús
Contigo está
Vamos a celebrar
La vida</strong>

Nuestra juventud
Está llamada a la acción
Es la pieza que falta en tu interior
Abre tu corazón

La alegría de Dios
Te renovará
Una Iglesia llena de ilusión
Aquí podrás encontrar `
    }
  ];

  expandedIndex: number | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  get filteredAccordions() {
    return this.accordions.filter(item =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleAccordion(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  getSafeHtml(content: string): SafeHtml {
    return this.sanitizer.sanitize(1, content) || '';
  }
}
