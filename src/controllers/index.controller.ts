import { Request, Response } from 'express';

class IndexController {

  public index (req: Request, res: Response) {
    res.send('Enviado desde index.controller')
  } 

}

const indexController = new IndexController();
export default indexController;