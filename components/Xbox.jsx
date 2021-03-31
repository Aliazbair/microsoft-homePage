import styles from '../styles/xbox.module.css'

const Xbox = () => {
  return (
    <section className={styles.xbox}>
      <div className={styles.content}>
        <h2>Xbox Game Pass Ultimate</h2>
        <p className=''>
          Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality
          console and PC games. Play together with friends and discover your
          next favorite game.
        </p>
        <a href='#' class=''>
          Join Now <i class='fas fa-chevron-right'></i>
        </a>
      </div>
    </section>
  )
}

export default Xbox
