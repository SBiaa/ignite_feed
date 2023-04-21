import { Header } from './Components/Header'
import  './global.css'
import styles from './App.module.css';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

function App() {


  return (
   <>
   <Header/>
   <div className={styles.wrapper}>
    <Sidebar />
    <Post />

   </div>
   </>
      
  )
}

export default App
