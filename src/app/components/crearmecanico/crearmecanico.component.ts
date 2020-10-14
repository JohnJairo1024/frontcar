import { Component, OnInit } from '@angular/core';
import { Mecanico } from '../../models/mecanico';
import { MacanicoService } from '../../services/macanico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearmecanico',
  templateUrl: './crearmecanico.component.html',
  styleUrls: ['./crearmecanico.component.css']
})
export class CrearmecanicoComponent implements OnInit {


  mecanico: Mecanico = new Mecanico();


  constructor(private mecanicoService: MacanicoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMecanico() {
    this.mecanicoService.createMecanico(this.mecanico).subscribe(data => {
      console.log(data);
      this.goToMecanicoList();
    },
      error => console.log(error));
  }

  goToMecanicoList() {
    this.router.navigate(['/mecanicos']);
  }

  onSubmit() {
    console.log(this.mecanico);
    this.saveMecanico();
  }


}
