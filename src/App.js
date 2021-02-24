import Minesweeper from './components/Minesweeper'
import { ContextProvider } from './context'

function App() {
  return (
     <ContextProvider>
       <Minesweeper />
     </ContextProvider>
  );
}

export default App;
