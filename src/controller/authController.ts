import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getAllUsuarios = async (req: Request, res: Response) => {
    const usuario = await Usuario.findAll();
    res.json(usuario);
}

export const getUsuarioById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        })
    }

}


export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    
    try {
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Email existente: ' + body.email
            })
        }
        const usuario = await Usuario.create(body);
        await usuario.save();
        res.json(usuario); 
    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'Usuario nao existe'
            })
        }
        await usuario.update(body);
        res.json(usuario);

    } catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        })
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'Usuario nao existe'
        })
    }
    
    await usuario.destroy();
    res.json(usuario);
}


export const inativaUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'Usuario nao existe'
        })
    }
    await usuario.update({status:false})
    res.json(usuario);
}