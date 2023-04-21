import styles from './Post.module.css'
import { Comment } from './Comment'
export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar}
            src="https://github.com/sbiaa.png"
          />
          <div className={styles.authorInfo}>
            <strong>Bia Siqueira</strong>
            <span>Developer</span>
          </div>
        </div>      

        <time>Publicado ha 1h</time>
      </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare</p>
        <p> <a href="#">#novoprojeto #nlw #rocketseat</a></p>
 
        </div>


    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea 
        placeholder='Deixe um comentário' 
      />

      <footer>
        <button type='submit'>
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment />
    </div>
    </article>
  )
}