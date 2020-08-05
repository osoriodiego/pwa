import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {

  logros: ILogro[];

  constructor() {
    this.logros = [
      {
        id: 1,
        title: "logro1",
        author: "author X",
        description: "este es el logro 1."
      },
      {
        id: 2,
        title: "segudno titulo",
        author: "author X",
        description: "descripcioń del logro dos"
      },
      {
        id: 3,
        title: "titulo 3",
        author: "author Y",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci corrupti distinctio voluptate incidunt in facilis eius optio, omnis voluptatum doloremque deleniti recusandae saepe doloribus praesentium necessitatibus, id earum officia?"
      },
      {
        id: 4,
        title: "titulo 4",
        author: "author Y",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci corrupti distinctio voluptate incidunt in facilis eius optio, omnis voluptatum doloremque deleniti recusandae saepe doloribus praesentium necessitatibus, id earum officia?"
      },
      {
        id: 5,
        title: "titulo 5",
        author: "author Y",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci corrupti distinctio voluptate incidunt in facilis eius optio, omnis voluptatum doloremque deleniti recusandae saepe doloribus praesentium necessitatibus, id earum officia?"
      },
      {
        id: 6,
        title: "sdfadsfadsafd",
        author: "author X",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci corrupti distinctio voluptate incidunt in facilis eius optio, omnis voluptatum doloremque deleniti recusandae saepe doloribus praesentium necessitatibus, id earum officia?"
      },
      {
        id: 7,
        title: "Tiiiituuuulooo",
        author: "Nano Osorio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci corrupti distinctio voluptate incidunt in facilis eius optio, omnis voluptatum doloremque deleniti recusandae saepe doloribus praesentium necessitatibus, id earum officia?"
      }
    ];
  }


  all(): ILogro[] {
    return this.logros;
  }


  find(id: number): ILogro {
    return this.logros.find((logro) => logro.id == id);
  }
}


// Logros: id, title, description
export interface ILogro {
  id: number;
  title: string;
  author: string;
  description?: string
}
