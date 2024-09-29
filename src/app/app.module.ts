import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { SignupComponent } from './signup/signup.component'; // Import SignupComponent
import { routes } from './app.routes'; // Import routes

// Import Angular Material modules
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ElectricalComponent } from './electrical/electrical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  // Declare HomeComponent
    LoginComponent, // Declare LoginComponent
    SignupComponent, // Declare SignupComponent
    ElectricalComponent // Declare ElectricalEngineeringComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Import routes
    ReactiveFormsModule, // Import ReactiveFormsModule
    MatMenuModule,  // Move Material modules to imports
    MatIconModule,  // Move Material modules to imports
    MatButtonModule,  // Move Material modules to imports
    MatInputModule,  // Move Material modules to imports
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
