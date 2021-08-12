import express,{Application} from 'express';
import userRoutes from '../routes/usuarioRoutes';
import vagasRoutes from '../routes/vagaRoutes';
import avalEmpresaRoutes from '../routes/avalEmpresaRoutes';
import empressaRoutes from '../routes/empresaRoutes';
import cors from 'cors';
import db from '../db/connection';


class Server{

    private app:Application;
    private port: string;
    private apiPaths ={
        usuario:'/usuario',
        vagas:'/vagas',
        empresa:'/empresa',
        avaliacao:'/avaliacao'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';//valor nulo inicia a porta 8080

        this.dbConnection();
        this.midllewares();
        this.routes(); 
    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log('Db online')
        }catch(error){
            throw new Error(error);
        }
    }
 
    midllewares(){

        //cors
        this.app.use(cors());
        //ler body
        this.app.use(express.json());
        //pagina statica(notfound)
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.apiPaths.usuario,userRoutes);
        this.app.use(this.apiPaths.vagas,vagasRoutes);
        this.app.use(this.apiPaths.avaliacao,avalEmpresaRoutes);
        this.app.use(this.apiPaths.empresa,empressaRoutes);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Server'+ this.port);
        })
    }
}
export default Server;