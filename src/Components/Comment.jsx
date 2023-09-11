import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from './Avatar'
export function Comment(){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false}  src="https://github.com/diego3g.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bia Siqueira</strong>
              <time title='' dateTime=''> Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>UAAUU SHOOOW</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}