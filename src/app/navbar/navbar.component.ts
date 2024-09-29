import { Component ,ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatMenuModule,MatMenuTrigger],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  
}
