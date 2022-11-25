import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private candSer: ListCandidatsService){}

  selCandidat

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selCandidat = this.candSer.getCandidatById(p.get('id'));
        //this.router.navigateByUrl("..");
        // this.location.back();
      },
    });
  }
  onSubmit(updateEmployee: NgForm) {
    console.log(updateEmployee);
    console.log(this.selCandidat.id);

    this.candSer.editCandidat(this.selCandidat.id,updateEmployee)

  }
}
