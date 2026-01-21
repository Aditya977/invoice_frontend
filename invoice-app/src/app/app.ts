import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Invoice } from './invoice/invoice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Invoice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('invoice-app');
}
