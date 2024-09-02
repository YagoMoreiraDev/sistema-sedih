import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-mainpainel',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './mainpainel.component.html',
  styleUrl: './mainpainel.component.css'
})
export class MainpainelComponent {

}
