// about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  technologies: string[] = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    '.NET',
    'C#',
    'SQL Server',
    'MongoDB',
    'Azure DevOps',
    'Git',
    'RESTful APIs',
    'Microservices',
    'CI/CD',
    'Docker',
    'Responsive Design'
  ];

  education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'University of Technology',
      period: '2016-2020'
    },
    {
      degree: 'Full-Stack Developer Certification',
      institution: 'Web Development Bootcamp',
      period: '2020'
    }
  ];
}
