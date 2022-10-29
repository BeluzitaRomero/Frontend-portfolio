export class Persona {
  id?: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  img: string;
  localidad: string;
  pais: string;

  constructor(
    nombre: string,
    apellido: string,
    descripcion: string,
    img: string,
    localidad: string,
    pais: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.descripcion = descripcion;
    this.img = img;
    this.localidad = localidad;
    this.pais = pais;
  }
}
