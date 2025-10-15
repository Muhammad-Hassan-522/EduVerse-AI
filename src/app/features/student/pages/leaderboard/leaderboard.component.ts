import { Component, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
//import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule, HeaderComponent, DecimalPipe],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
})
export class LeaderboardComponent {
  selectedRank = 2;
  totalPoints = signal(12450);
  pointsChange = signal(250);
  currentLevel = signal(5);
  nextLevel = signal(6);
  xpToNext = signal(2500);
  selectPlayer(rank: number): void {
    this.selectedRank = rank;
  }
  certificates = [
    {
      title: 'Certificate of Completion: Intro to Marketing',
      date: 'Issued on: Oct 20, 2023',
      file: 'certificate-marketing.pdf',
    },
    {
      title: 'Certificate of Excellence: Art History',
      date: 'Issued on: Sep 15, 2023',
      file: 'certificate-art.pdf',
    },
  ];

  badges = [
    {
      name: 'Course Completer',
      date: 'Oct 20, 2023',
      color: 'bg-green-100',
      textColor: 'text-green-600',
      icon: 'fa-solid fa-graduation-cap',
    },
    {
      name: 'Perfect Quiz',
      date: 'Oct 18, 2023',
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      icon: 'fa-solid fa-clipboard-check',
    },
    {
      name: 'Team Player',
      date: 'Oct 15, 2023',
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      icon: 'fa-solid fa-users',
    },
    {
      name: 'Hot Streak',
      date: 'Oct 12, 2023',
      color: 'bg-red-100',
      textColor: 'text-red-600',
      icon: 'fa-solid fa-fire',
    },
    {
      name: 'Forum Leader',
      date: 'Locked',
      color: 'bg-gray-100',
      textColor: 'text-gray-400',
      icon: 'fa-solid fa-lock',
      locked: true,
    },
  ];

  leaderboard = [
    {
      rank: 1,
      name: 'Tayyaba Anwar',
      points: 15200,
      avatar: 'assets/avatar/1.png',
      highlight: false,
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      rank: 2,
      name: 'You',
      points: 12450,
      avatar: 'assets/avatar/5.png',
      highlight: true,
      color: 'bg-blue-500 text-white',
    },
    {
      rank: 3,
      name: 'Muhammad Hassan',
      points: 10300,
      avatar: 'assets/avatar/3.png',
      highlight: false,
      color: 'bg-green-100 text-gray-700',
    },
    {
      rank: 4,
      name: 'Ayesha Javaid',
      points: 9450,
      avatar: 'assets/avatar/2.png',
      highlight: false,
      color: 'bg-gray-100 text-gray-700',
    },
    {
      rank: 5,
      name: 'Manahil Kamran',
      points: 8200,
      avatar: 'assets/avatar/4.png',
      highlight: false,
      color: 'bg-pink-100 text-gray-700',
    },
  ];

  downloadCertificate(filename: string) {
    const link = document.createElement('a');
    link.href = `assets/certificates/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
