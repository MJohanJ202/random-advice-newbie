import { useEffect, useState } from 'react'
import { quote } from '../../config/types'
import { getQuotes } from '../../services/quotes'
import classes from './styles.module.css'

export function Advice () {
  const [quotes, setQuotes] = useState<quote | null>(null)

  const handleClick = () => {
    getQuotes().then(data => setQuotes(data))
  }

  useEffect(() => {
    getQuotes().then(data => setQuotes(data))
  }, [])

  return (
    <article className={classes.card}>
      <header className={classes.cardHeader}>
        <h3>Advice <span>#{quotes?.id ?? '#117'}</span> </h3>
      </header>
      <div className={classes.cardContent}>
        <p>{
          quotes?.advice ??
          'It is easy to sit and take notice, what\'s difficult is getting up and taking action.'
        }
        </p>
      </div>
      <footer className={`flex content-center ${classes.cardFooter}`} onClick={handleClick}>
        <a href='#' className='flex content-center'>
          <img src='/dice.svg' alt='button image of the dice with a 5" face' />
        </a>
      </footer>
    </article>
  )
}
