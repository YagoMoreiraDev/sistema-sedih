import { Component } from '@angular/core';
import { MainpainelComponent } from "../mainpainel/mainpainel.component";

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [MainpainelComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {

}
