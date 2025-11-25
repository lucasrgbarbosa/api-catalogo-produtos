import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = Router();
const produtoController = new ProdutoController();

router.get('/', produtoController.listarTodos);
router.get('/:id', produtoController.buscarPorId);
router.post('/', produtoController.criar);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.deletar);

export default router;