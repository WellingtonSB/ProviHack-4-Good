import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../CadastroEmpresa/styled";
import { Link } from "react-router-dom";
import  useAPI from "../../helpers/LacreiApi";
import { doLogin } from "../../helpers/AuthHandler"


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
        <h1 className="Title">Lacrou, Empresa!</h1>
        <h2 className="SubTitle">
          {" "}
          Precisamos de alguns dados seus para realizar o cadastro. Vamos
          juntes?
        </h2>

        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label font1">
              Email
            </label>
            <input
              type="email"
              class="form-control"
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
            <label for="exampleInputPassword1" class="form-label">
              Senha
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Insira sua senha"
              disabled={disabled}  
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
            />
          </div>
        </form>
        
          <div className="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">
              Continuar
            </button>
          </div>
      

        <p> Passo 1 de 3 </p>
      </PageArea>
    </PageContainer>
  );
};
export default Page;
