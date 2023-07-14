import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="sidebarContainer">
      <Sidebar></Sidebar>
      </div>
      <div className="contentContainer">
      <Content></Content>
      </div>
    </div>
  );
}

export default App;
