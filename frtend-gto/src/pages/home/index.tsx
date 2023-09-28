import NavBar from 'components/basics/navbar';
import Footer from 'components/basics/footer';
import { FiLogIn } from 'react-icons/fi';


import './styles.css';
const imagePath: string = '/frtend/src/assets/images/ccp.png';

const Home: React.FC = () => {
  return (
    <>
      <div id="header">
        <NavBar />
      </div>
      <div id="conteudo">
        <div id="contentl">
          <h1>Comunidade de Codigo e Programação</h1>
          <p>Blog para postagem de codigos entre Desenvolvedores.</p>
          <a href="/autentica">
            <span>
              <FiLogIn />
            </span>
            <strong>Acessar o sistema!</strong>
          </a>
        </div>
        <div id="contentr">
          <img src={imagePath} alt="CCP" />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
