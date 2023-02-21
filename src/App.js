import './App.css';
import Colorcomp from './components/Colorcomp';

function App() {
  return (
    <div className="App">
     <Colorcomp color="PINK" code="#FF6663"/>
     <Colorcomp color="GRAY" code="#333333"/>
     <Colorcomp color="BLACK" code="#000000"/>
     <Colorcomp color="GREEN" code="#38BB14"/>
     <Colorcomp color="RED" code="#C90B0B"/>
     <Colorcomp color="ORANGE" code="#FF8000"/>
     <Colorcomp color="YELLOW" code="#FFF500"/>
     <Colorcomp color="LIGHT GRAY" code="#CCCCCC"/>
     <Colorcomp color="PURPLE" code="#7E41A2"/>
     <Colorcomp color="BROWN" code="#C14911"/>
    </div>
  );
}

export default App;
