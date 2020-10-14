import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() mensaje: string;
  @Input() tipo: string;
  @Input() mostrar: boolean;
  @Input() estilo: string;
  @Output() mostrarMensaje: EventEmitter<string>;

  constructor() {
    this.tipo = "";
    this.mensaje = "test!!!";
    this.verMensaje();
    this.mostrarMensaje = new EventEmitter();
  }

  ngOnInit() {
  }

  verMensaje() {
    if (this.tipo) {
      switch (this.tipo) {
        case "exito":
          this.estilo = "alert alert-success";
          break;
        case "error":
          this.estilo = "alert alert-danger";
          break;
        case "info":
          this.estilo = "alert alert-primary";
          break;
        default:
          this.estilo = "alert alert-warning";
      }
    }
  }

}
