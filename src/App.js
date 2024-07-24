import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Navbar />
    </div>
  );
}

export default App;
