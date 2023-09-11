import { Header } from './Components/Header'
import  './global.css'
import styles from './App.module.css';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/Post';

const posts = [
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa!', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return.' },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
]

function App() {
  return (
   <>
   <Header/>
   <div className={styles.wrapper}>
    <Sidebar />
    <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
    <Post />

   </div>
   </>
      
  )
}

export default App
