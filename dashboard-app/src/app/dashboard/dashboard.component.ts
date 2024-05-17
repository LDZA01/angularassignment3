import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  providers:[DogService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  dogImageUrl: string= '';

  constructor(private dogService: DogService) {}


  ngOnInit(): void {
    this.dogService.dogImage$.subscribe(image => {
      this.dogImageUrl = image;
    });
  }

  loadNewImage(): void {
    this.dogService.fetchRandomDogImage();
  }

}
