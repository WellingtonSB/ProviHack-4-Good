import { Request, Response } from 'express';
import Aval_empresa from '../models/aval_empresa';


export const getAvaliacaoAval = async (req: Request, res: Response) => {
    const avalEmpresa = await Aval_empresa.findAll();
    res.json(avalEmpresa);
}

export const getAvaliacaolById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const avalEmpresa = await Aval_empresa.findByPk(id);
    if (avalEmpresa) {
        res.json(avalEmpresa);
    } else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        })
    }
}

export const postAvaliacao = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const avalEmpresa = await Aval_empresa.create(body);
        await avalEmpresa.save();
        res.json(avalEmpresa); 
    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const putAvaliacao = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const avalEmpresa = await Aval_empresa.findByPk(id);
        if (!avalEmpresa) {
            return res.status(404).json({
                msg: 'Não existe'
            })
        }
        await avalEmpresa.update(body);
        res.json(avalEmpresa);

    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const deleteAvaliacao = async (req: Request, res: Response) => {
    const { id } = req.params;
    const avalEmpresa = await Aval_empresa.findByPk(id);
    if (!avalEmpresa) {
        return res.status(404).json({
            msg: 'Não existe.'
        })
    }

    await avalEmpresa.destroy();
    res.json(avalEmpresa);
}
