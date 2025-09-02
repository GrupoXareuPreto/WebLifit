import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConceitoComponent } from "./conceito/conceito.component";
import { HomeComponent } from "./home/home.component";
import { InfosComponent } from "./infos/infos.component";
import { TelasComponent } from "./telas/telas.component";
import { CarrosselComponent } from './carrossel/carrossel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConceitoComponent, HomeComponent, InfosComponent, TelasComponent, CarrosselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebLifit';
}
