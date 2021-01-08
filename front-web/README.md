Anotações da aula de React:

Obs: Para melhor entendimento eu gosto de comparar os conceito de react com a do Angular...

** -> comentário do vídeo

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