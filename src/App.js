import "./App.css";
import Nav from "./components/nav/Nav";
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./components/chat/Chat";




function App() {

  const [user] = useAuthState(auth)
  console.log(user)

  return (
    <>
    
      <Nav/>
      {user ? <Chat/>: null}
      

    </>
  );
}


export default App;
