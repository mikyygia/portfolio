import './App.css';
import ContentArea from "./components/layout/ContentArea"
import ProfilePanel from "./components/layout/ProfilePanel"

function App() {
  return (
    <div className='container'>
        <ProfilePanel />
        <ContentArea />
    </div>
  );
}

export default App;