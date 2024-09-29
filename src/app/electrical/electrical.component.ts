import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-electrical',
  standalone: true,
  imports: [ReactiveFormsModule,MatCardModule], // Add ReactiveFormsModule here
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {

  electricalEngineeringForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.electricalEngineeringForm = this.fb.group({
      title: ['Electrical Engineering', Validators.required],
      description: ['', Validators.required],
      researchArea: ['', Validators.required],
      manuscriptType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.electricalEngineeringForm.valid) {
      console.log(this.electricalEngineeringForm.value);
      // Handle form submission here
    }
  }
}
