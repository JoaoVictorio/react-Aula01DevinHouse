import './App.css'

function App() {
  //BLOCO SUPERIOR 
  const titulo = "Meu título"  
  
  const usuario = {
    nome: "Vitório",
    idade: 24
  }
  
  function somar(a, b) {
    return a + b
  }
  
  // tudo que fica dentro dos parênteses do return é JSX, 
  // ou seja, podemos usar HTML junto com Javascript
  return (  
      // A estilização inline tem que estar com 2 colchetes
    <>
      <div className="cadr2"></div>
      <div className="card">Hello Word!
        {/* Toda Tag tem que ter fechamento */}
        <h1>{titulo}</h1>
        {somar(10, 2)}
        <p>Nome: {usuario.nome}, Idade: {usuario.idade}</p>
      </div>
    </>
  )
}

export default App
