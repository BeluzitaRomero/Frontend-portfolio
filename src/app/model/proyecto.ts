export class Proyecto {
  id?: number;
  nombreProyecto: string;
  linkDeployProyecto: string;
  linkRepoProyecto: string;
  descripcionProyecto: string;
  img1: string;
  img2: string;
  img3: string;

  constructor(
    nombreProyecto: string,
    linkDeployProyecto: string,
    linkRepoProyecto: string,
    descripcionProyecto: string,
    img1: string,
    img2: string,
    img3: string
  ) {
    this.nombreProyecto = nombreProyecto;
    this.linkDeployProyecto = linkDeployProyecto;
    this.descripcionProyecto = descripcionProyecto;
    this.linkRepoProyecto = linkRepoProyecto;
    this.img1 = img1;
    this.img2 = img2;
    this.img3 = img3;
  }
}
