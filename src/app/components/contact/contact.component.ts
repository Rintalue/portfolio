import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const formData = contactForm.value;

      this.http.post('http://localhost:3000/send-email', formData).subscribe(
        response => {
          console.log('Email sent successfully!', response);
          contactForm.reset();
        },
        error => {
          console.error('Error sending email:', error);
        }
      );
    }
  }
}
