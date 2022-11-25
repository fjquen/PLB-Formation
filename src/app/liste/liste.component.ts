import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [],
})
export class ListeComponent implements OnInit {
  listeCandidats: Candidat[] = [];
  @Output() sendCandToCv = new EventEmitter();

  constructor(private candSer: ListCandidatsService) {}
  ngOnInit(): void {
    this.listeCandidats = this.candSer.getAllCandidats();
  }

  sendToCv(cand) {
    this.sendCandToCv.emit(cand);
  }

  showCands() {
    console.log(this.candSer.getAllCandidats());
  }
}
