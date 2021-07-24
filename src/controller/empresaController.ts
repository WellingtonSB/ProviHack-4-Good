import { Request, Response } from 'express';
import Empressa from '../models/empressa';


export const getAllEmpressas = async (req: Request, res: Response) => {
    const empressa = await Empressa.findAll();
    res.json(empressa);
}

export const getEmpressaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const empressa = await Empressa.findByPk(id);
    if (empressa) {
        res.json(empressa);
    } else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        })
    }

}

export const postEmpressa = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const empressa = await Empressa.create(body);
        await empressa.save();
        res.json(empressa);
        
    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const putEmpressa = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const empressa = await Empressa.findByPk(id);
        if (!empressa) {
            return res.status(404).json({
                msg: 'Não existe'
            })
        }
        await empressa.update(body);
        res.json(empressa);

    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const deleteEmpressa = async (req: Request, res: Response) => {
    const { id } = req.params;

    const empressa = await Empressa.findByPk(id);
    if (!empressa) {
        return res.status(404).json({
            msg: 'Não existe.'
        })
    }

    await empressa.destroy();
    res.json(empressa);
}
