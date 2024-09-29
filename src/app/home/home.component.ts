import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImageslideComponent } from '../imageslide/imageslide.component';
import { ElectricalComponent } from '../electrical/electrical.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,ImageslideComponent,ElectricalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
