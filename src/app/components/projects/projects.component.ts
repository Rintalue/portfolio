import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Platform } from '@angular/cdk/platform'; 
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = [
    {
      name: 'E-book Web App',
      description: 'This is a webapp that deals with selling books online. It also has an integrated PayPal system that will help users easily purchase books online.',
      techStack: ['Angular Framework', 'TypeScript', 'JsonApi', 'NodeJs'],
      githubLink: 'https://github.com/Rintalue/e-book-webapp',
      imageUrl: '/images/ebook.png',
      type: 'web',
    },
    {
      name: 'FarmTools Ecommerce',
      description: 'This is a webapp that deals with selling books online. It also has an integrated PayPal system that will help users easily purchase books online.',
      techStack: ['Phoenix Framework', 'Elixir', 'JavaScript', 'MpesaApis'],
      githubLink: 'https://github.com/Rintalue/farm-tools-ecommerce',
      imageUrl: '/images/farm.png',
      type: 'web',
    },
    {
      name: 'Employee Database',
      description: 'This deals with an employee table that makes an API call that sends and fetches employee data from a dummy server. There’s also implementation of pipes used in Angular.',
      techStack: ['Angular Framework', 'TypeScript', 'JsonApi'],
      githubLink: 'https://github.com/Rintalue/EmployeeInformation',
      imageUrl: '/images/employee.png',
      type: 'API',
    },
    {
      name: 'Pet Store',
      description: 'This is a pet store website made by Angular that deals with the sale of pets online.',
      techStack: ['Angular Framework', 'TypeScript', 'JsonApi'],
      githubLink: 'https://github.com/Rintalue/PetStore',
      imageUrl: '/images/pet.png',
      type: 'mobile',
    },
    {
      name: 'To Do app',
      description: 'This is a simple to-do application for tracking your tasks.',
      techStack: ['Phoenix Framework', 'Elixir'],
      githubLink: 'https://github.com/Rintalue/todo_app',
      imageUrl: '/images/todo.png',
      type: 'mobile',
    },
  ];

  filteredProjects: Project[] = [...this.projects];

  filterProjects(type: string) {
    if (type === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.type === type);
    }
  }

  constructor(private el: ElementRef, private platform: Platform) {}

  ngAfterViewInit(): void {
    if (this.platform.isBrowser) {
      const options = {
        threshold: 0.5
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      const projectContainer = this.el.nativeElement.querySelector('.projects-container');
      if (projectContainer) observer.observe(projectContainer);
    }
  }
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  imageUrl: string;
  type: string;
}
