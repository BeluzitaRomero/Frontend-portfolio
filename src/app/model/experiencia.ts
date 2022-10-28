export class Experiencia {
  id?: number;
  nombreExp: string;
  descripcionExp: string;
  imgExp: string;

  constructor(nombreExp: string, descripcionExp: string, imgExp: string) {
    this.nombreExp = nombreExp;
    this.descripcionExp = descripcionExp;
    this.imgExp = imgExp;
  }
}
