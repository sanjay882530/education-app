import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-imageslide',
  standalone: true,
  imports: [CommonModule,MatIcon],  
  templateUrl: './imageslide.component.html',
  styleUrls: ['./imageslide.component.css']
})
export class ImageslideComponent {
  images = [
    'assets/img1.jpeg',
    'assets/img4.jpg',
    'assets/img3.jpg',
     'assets/img6.jpg'
  ];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
