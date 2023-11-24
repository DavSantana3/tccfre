import './index.scss';
import adicionar from '../../assets/images/adicionar.png';
import logo from '../../assets/images/logo.png';

function App() {
  return (
    <div className="App">
      <header className="Cabecalho">
        <img src={logo} alt="Logo" className="Logo" />
      </header>

      <div className="tela">
       

        <div className="conteiiiner">
          <img src={adicionar} alt="Adicionar" className="Adicionar" />

          <div className="frete">
            <h2>Frete Grátis</h2>
            <label>
              <input type="radio" name="escolha" value="sim" /> Sim
            </label>

            <label>
              <input type="radio" name="escolha" value="nao" /> Não
            </label>
          </div>

          <div className="formulario-diireita">
            <input type="textooo" placeholder="Nome do Produto" />
            <input type="textoo" placeholder="Quantidade" />
            <input type="textoo" placeholder="Marca do Produto" />
            <input type="textoo" placeholder="Descrição" />
            <input type="textoo" placeholder="Preço" />
            <button>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
