import './App.css'
import {Header} from "./components/header/Header.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";

function App() {
  return (
      <>
        <Header />
        <div className="content">
          <Sidebar />
          <div>Registreringer</div>
        </div>
        <Footer />
      </>
  )
}

export default App
