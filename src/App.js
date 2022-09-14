
import './App.css';
import Footer from './components/Footer/Footer';


function App() {
    let styleH1 = {
      color: "blue",
      textDecoration : "underline",
      marginTop: "100px"
    }
    let title = "Bienvenido a IndiMarket"   
  return (

    <div className="App">
      <header className="App-header">
          <h1 style={styleH1}> <strong>{title}</strong></h1>
              
      </header>
      <Footer/>
    </div>
  );
}




export default App;
