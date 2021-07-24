import { Request, Response } from 'express';
import Classificacao from '../models/classificacao';


export const getAllClassificacao = async (req: Request, res: Response) => {
    const classificacao = await Classificacao.findAll();
    res.json(classificacao);
}

export const getClassificacaoById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const classificacao = await Classificacao.findByPk(id);
    if (classificacao) {
        res.json(classificacao);
    } else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        })
    }

}

export const postClassificacao = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        /*   const classificacao = new Classificacao(body);
  await classificacao.save();
  res.json(classificacao); */
    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const putClassificacao = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const classificacao = await Classificacao.findByPk(id);
        if (!classificacao) {
            return res.status(404).json({
                msg: 'Não existe'
            })
        }
        await classificacao.update(body);
        res.json(classificacao);

    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const deleteClassificacao = async (req: Request, res: Response) => {
    const { id } = req.params;

    const classificacao = await Classificacao.findByPk(id);
    if (!classificacao) {
        return res.status(404).json({
            msg: 'Não existe.'
        })
    }

    await classificacao.destroy();
    res.json(classificacao);
}
