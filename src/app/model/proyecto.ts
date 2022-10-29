export class Proyecto {
  id?: number;
  nombreProyecto: string;
  linkDeployProyecto: string;
  linkRepoProyecto: string;
  descripcionProyecto: string;

  constructor(
    nombreProyecto: string,
    linkDeployProyecto: string,
    linkRepoProyecto: string,
    descripcionProyecto: string
  ) {
    this.nombreProyecto = nombreProyecto;
    this.linkDeployProyecto = linkDeployProyecto;
    this.descripcionProyecto = descripcionProyecto;
    this.linkRepoProyecto = linkRepoProyecto;
  }
}
