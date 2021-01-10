Anotações da aula de React:

Obs: Para melhor entendimento eu gosto de comparar os conceito de react com a do Angular...

** -> comentário do vídeo

Criando um projeto React:
  npx create-react-app front-web(nome do projeto) --template typescript --use-npm 

Component -> É um "pedaço" de um todo.

Props -> É uma injeção:

  *Component secundário

  type Inject = {
    valor: string;
  }

  function injectApp({valor}:Inject){
    return(
      <div>
        <h1>{valor}</h1>
      </div>
    )
  }

JXS -> Mistura de HTML com JS (o famoso 'binding')
 
  *Component primário
 
  function app(){
    return(
      <div>
        <injectApp valor='Olá'>
      </div>
    )
  }

Ciclo de vida do component -> useEffect({function}, [array]):
  useEffect(
    () => { console.log('Estou funcionando'), [**depedências] }
  );

  Obs: Ele só vai executar a função, por exemplo, quando o component for chamada. 

  Estado -> useState() :

    "Imagine que tem dois botões e dois eventos distintos de somar e diminuir, vamos criar os eventos"

    function Main(){

      const [valor, setValor] = useState(valorInicial:number);

      somar(){
        setValor(valor + 1);
      }

      diminuir(){
        setValor(valor - 1);
      }

      return(
        HTML-IMAGINATION
      )

    }

Rotas ():
  Primeiro precisa instalar a (1)biblioteca/(2)tipo de rotas;
  1: npm install react-router-dom
  2: npm install @type/react-router-dom

  Criei um component Router();
  <BrowserRouter>
     <Switch>
          <Route path='/name'>
            <NameApp />
          </Route>
     <Switch>
  </BrowserRouter>

  <BrowserRouter> => Deve definir essa tag pai;
  <Switch> => Uma condição pra ver ser a rota desejada é verdadeira
  <Router path='/'> => tag mais endpoint 
  <NameApp/> => componente que deve ser chamado. 
