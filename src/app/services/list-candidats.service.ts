import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private allCandidates = [
    new Candidat(1, 'bart', 'simpson', 12, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 44, 'Directeur', 'homer.jpg'),
    new Candidat(3, 'marge', 'simpson', 33, 'Chef de projet', 'marge.jpeg'),
  ];
  constructor() {}

  getAllCandidats() {
    return this.allCandidates;
  }

  getCandidatById(id) {
    return this.allCandidates.find((c) => c.id == id);
  }

  addNewCandidat() {
    this.allCandidates.push(
      new Candidat(2, 'NEW', 'CANDIDAT', 44, 'Directeur', 'homer.jpg')
    );
  }

  editCandidat(id:any, employe:any) {
    // this.allCandidates.push(
    //   new Candidat(2, 'NEW', 'CANDIDAT', 44, 'Directeur', 'homer.jpg')
    // );
    console.log(id)
    console.log(employe)
  }
}
