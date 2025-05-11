import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[RouterOutlet]
})
export class AppComponent {
  title = 'daely';
  constructor(private router:Router){
    // this.router.navigate(['order']);
    // this.router.navigate(['login']);
  }
}
