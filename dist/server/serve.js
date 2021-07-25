"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("../routes/usuarioRoutes"));
const vagaRoutes_1 = __importDefault(require("../routes/vagaRoutes"));
const avalEmpresaRoutes_1 = __importDefault(require("../routes/avalEmpresaRoutes"));
const empresaRoutes_1 = __importDefault(require("../routes/empresaRoutes"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuario: '/usuario',
            vagas: '/vagas',
            empresa: '/empresa',
            avaliacao: '/avaliacao'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8080'; //valor nulo inicia a porta 8080
        this.dbConnection();
        this.midllewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Db online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    midllewares() {
        //cors
        this.app.use(cors_1.default());
        //ler body
        this.app.use(express_1.default.json());
        //pagina statica(notfound)
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuario, usuarioRoutes_1.default);
        this.app.use(this.apiPaths.vagas, vagaRoutes_1.default);
        this.app.use(this.apiPaths.avaliacao, avalEmpresaRoutes_1.default);
        this.app.use(this.apiPaths.empresa, empresaRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=serve.js.map