import { Router } from 'express';
import maquinasController from '../controllers/maquinas.controller';

class MaquinasRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', maquinasController.obtenerMaquinas);
    this.router.get('/:id', maquinasController.obtenerMaquina);
    this.router.post('/', maquinasController.crearMaquina);
    this.router.put('/:id', maquinasController.editarMaquina);
    this.router.delete('/:id', maquinasController.eliminarMaquina);
  }

}

const maquinasRoutes = new MaquinasRoutes();
export default maquinasRoutes.router;