import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logros: ILogro[];
  titulo = "Bienvenido";

  constructor() { }

  ngOnInit() {
    this.logros = this.getLogros();
    console.log(this.logros);
  }

  getLogroById(id: number): ILogro {
    let logro: ILogro;
    for (let i = 0; i < this.logros.length; i++) {
      if (this.logros[i].id === id) {
        logro = this.logros[i];
      }
    }
    return logro;
  }

  getLogros(): ILogro[] {
    return [
      {
        id: 1,
        title: "logro1",
        description: "este es el logro 1."
      },
      {
        id: 2,
        title: "segudno titulo",
        description: "descripcioń del logro dos"
      },
      {
        id: 3,
        title: "titulo 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci corrupti distinctio voluptate incidunt in facilis eius optio, omnis voluptatum doloremque deleniti recusandae saepe doloribus praesentium necessitatibus, id earum officia?"
      },
      {
        id: 4,
        title: "titulo 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci corrupti distinctio voluptate incidunt in facilis eius optio, omnis voluptatum doloremque deleniti recusandae saepe doloribus praesentium necessitatibus, id earum officia?"
      }
    ];
  }
}

// Logros: id, title, description

interface ILogro {
  id: number;
  title: string;
  description?: string
}
