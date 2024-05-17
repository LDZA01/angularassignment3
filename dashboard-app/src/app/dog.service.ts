import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogImageSubject = new BehaviorSubject<string>('');
  dogImage$ = this.dogImageSubject.asObservable();

  constructor(  private http: HttpClient) { }

  fetchRandomDogImage(): void {
    this.http.get<{message: string  , status: string}>('https://dog.ceo/api/breeds/image/random').subscribe(response => {
      if (response.status === 'success') {
        this.dogImageSubject.next(response.message);
      }
    }); 
  }
}
