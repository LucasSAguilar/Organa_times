import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';
import Colaborador from "./componentes/Colaborador";

function App() {

  const [times, setTimes] = useState([
    {
     
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lucas Aguilar',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/LucasSAguilar.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Elon Musk',
      cargo: 'Desenvolvedor Javascript',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZdCHAieEagYzo6sR7obLhnwhwVfVhakCXg&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Alan Zoka',
      cargo: 'Engenheiro de Software',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtS80wdkPAn5PuJcRBLvcXoKXNMOAlbowmlg&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Calango',
      cargo: 'Desenvolvedor Python',
      imagem: 'https://64.media.tumblr.com/9c05d154c525a80a6911336978777f84/4fe73ccd66b6a595-53/s1280x1920/8b729bb3fb9d7ac09a1b0316755fd62b3e3c699a.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Calango',
      cargo: 'Desenvolvedor Python',
      imagem: 'https://64.media.tumblr.com/9c05d154c525a80a6911336978777f84/4fe73ccd66b6a595-53/s1280x1920/8b729bb3fb9d7ac09a1b0316755fd62b3e3c699a.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Elon Musk',
      cargo: 'Desenvolvedor Javascript',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZdCHAieEagYzo6sR7obLhnwhwVfVhakCXg&usqp=CAU',
      time: times[3].nome
    },
  
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor
      }
      return time;
    }))
  } 

  function cadastrarTime (novoTime){
    setTimes([ ...times, {... novoTime, id: uuidv4()}])
  }

  function resolverFavorito (id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
              <Time 
                  aoFavoritar={resolverFavorito}
                  mudarCor={mudarCorDoTime}
                  key={indice} 
                  time={time} 
                  colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                  aoDeletar={deletarColaborador} 
              />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
