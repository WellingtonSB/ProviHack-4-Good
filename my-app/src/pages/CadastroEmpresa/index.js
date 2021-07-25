import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../CadastroEmpresa/styled";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import  useAPI from "../../helpers/LacreiApi";
import { doLogin } from "../../helpers/AuthHandler"

=======
>>>>>>> e09d522a6aa5a0d572da27c1c0d9783b41118ce5

const Page = () => {

  const api = useAPI();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);

        }
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== confirmPassword) {
            setError('Senhas não confere');
            setDisabled(false)
            return;
        }

        const json = await api.register(name, email, password, stateLoc);



  return (
    <PageContainer>
      <PageArea>
        <h1 className="Title"> Cadastro da Empresa</h1>
        <p className="text-muted mb-3"> *Campos obrigatórios </p>

        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="nomeEmpresa" class="form-label font1">
              Nome da Empresa*
            </label>
            <input
              type="email"
              class="form-control AreainputPass"
              id="nomeEmpresa"
              aria-describedby="nomeEmpresa"
              placeholder="Como a empresa se chama?"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label font1">
              Email
            </label>
            <input
              type="email"
              class="form-control AreainputPass"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="meu@email.com"
              disabled={disabled}
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label font1">
              Senha
            </label>
            <input
              type="password"
              class="form-control AreainputPass"
              id="exampleInputPassword1"
              placeholder="Insira sua senha"
              disabled={disabled}  
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
            />
          </div>
<<<<<<< HEAD
        </form>
        
          <div className="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">
              Continuar
            </button>
          </div>
      
=======
          <div className=" d-flex justify-content-start">
            <Link to="/empresacadastro2">
              <button
                type="submit"
                class="btn Frame-2 Cadastrar text-decoration-none mt-3"
              >
                Continuar
              </button>
            </Link>
          </div>
          <p className="concordo mt-3"> Ao clicar no botão "Cadastrar", você está criando uma conta na Lacrei Oportunidades e concorda com os nossos Termos de Uso e Política de Privacidade. </p>
>>>>>>> e09d522a6aa5a0d572da27c1c0d9783b41118ce5

        </form>
      </PageArea>
    </PageContainer>
  );
};
export default Page;
