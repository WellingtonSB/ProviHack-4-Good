import { Request, Response } from 'express';
import Vaga from '../models/vaga';

export const getAllVagas = async (req: Request, res: Response) => {
    const vaga = await Vaga.findAll();
    res.json(vaga);
}

export const getByNome = async (req: Request, res: Response) => {

    const { nome } = req.params;


    try {
        /*      const vagaNome = await Vaga.findOne({
               where: {
                   nome
               }
       
           });
            const vagaNome = await Vaga.findAll({
               where: Sequelize.and(
                 { nome }
               )
             }); */

        const vagaNome = await Vaga.findAll({
            where: {
                nome
            }
        });


        if (!vagaNome) {
            return res.status(400).json({
                msg: 'vaga não cadastrada: ' + nome
            })
        }
        res.json(vagaNome);
    } catch (error) {
        console.log(error)
    }
}

export const getVagaById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const vaga = await Vaga.findByPk(id);
    if (vaga) {
        res.json(vaga);
    } else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        })
    }

}

export const postVaga = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existeVaga = await Vaga.findOne({
            where: {
                nome: body.nome
            }
        });

        if (existeVaga) {
            return res.status(400).json({
                msg: 'Email existente: ' + body.nome
            })
        }
        const vaga = await Vaga.create(body);
        await vaga.save();
        res.json(vaga);
    } catch (error) {

        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const putVaga = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const vaga = await Vaga.findByPk(id);
        if (!vaga) {
            return res.status(404).json({
                msg: 'vaga nao existe'
            })
        }
        await vaga.update(body);
        res.json(vaga);

    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const deleteVaga = async (req: Request, res: Response) => {
    const { id } = req.params;
    const vaga = await Vaga.findByPk(id);
    if (!vaga) {
        return res.status(404).json({
            msg: 'A vaga nao existe'
        })
    }
    await vaga.destroy();
    res.json(vaga);
}

//classe nao instanciada
export const inativarVaga = async (req: Request, res: Response) => {
    const { id } = req.params;
    const vaga = await Vaga.findByPk(id);
    if (!vaga) {
        return res.status(404).json({
            msg: 'A vaga nao existe'
        })
    }
    await vaga.update({ status: false })
    res.json(vaga);
}