import { Request, Response } from 'express';
import pool from '../database';

class MaquinasController {

  public async obtenerMaquinas (req: Request, res: Response) {
    const data = (await pool).query('SELECT * FROM maquinas');
    data.then( maquinas => {
      res.json( maquinas );
    });
  } 

  public async obtenerMaquina (req: Request, res: Response) {
    const data = (await pool).query('SELECT * FROM maquinas WHERE id = ?', [req.params.id]);
    data.then( maquinas => {
      if(maquinas.length > 0){
        return res.json(maquinas[0]);
      } else{
        return res.status(400).json({text: "La maquina no existe"});
      }
    });
  } 

  public async crearMaquina (req: Request, res: Response) {
    (await pool).query('INSERT INTO maquinas set ?', [req.body]);
    res.json({mensaje: 'maquina creada'});
  } 

  public async editarMaquina (req: Request, res: Response) {
    (await pool).query('UPDATE maquinas SET ? WHERE id = ?', [req.body, req.params.id]);
    res.json({mensaje: 'maquina actualizada'});
  } 

  public async eliminarMaquina (req: Request, res: Response) {
    (await pool).query('DELETE FROM maquinas WHERE id = ?', [req.params.id]);
    res.json({mensaje: 'maquina eliminada'});
  } 

}

const maquinasController = new MaquinasController();
export default maquinasController;