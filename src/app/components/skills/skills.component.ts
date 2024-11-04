import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'path-to-angular-icon.png' },
    { name: 'TypeScript', icon: 'path-to-typescript-icon.png' },

  ];
  
}
