import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Invoice</h2>

    <div>
      <p><b>ID:</b> {{ invoice.invoiceId }}</p>
      <p><b>Customer:</b> {{ invoice.customerName }}</p>

      <ul>
        <li *ngFor="let item of invoice.items">
          {{ item.name }} — ₹{{ item.price }}
        </li>
      </ul>
    </div>

    <ng-template #loading>
      <p>Loading invoice...</p>
    </ng-template>
  `
})
export class Invoice implements OnInit {
  invoice: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('http://localhost:3000/api/invoices/1')
      .subscribe({
        next: (data : any) => {
          console.log('API DATA:', data);
          this.invoice = data;
        },
        error: (err : any) => {
          console.error('API ERROR:', err);
        }
      });
  }
}
