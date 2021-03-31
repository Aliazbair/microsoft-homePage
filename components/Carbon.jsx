import styles from '../styles/carbon.module.css'
const Carbon = () => {
  return (
    <div className=''>
      <section className={styles.carbon}>
        <div className={styles.content}>
          <h2>Commiting To Carbon Negative</h2>
          <p>
            Microsoft will be carbon negative by 2030 and by we 2051 we will
            remove all carbon the copmany has emitted sice it was founded in
            1975
          </p>
          <a href='#' className=''>
            Learn More <i className='fas fa-chevron-right'></i>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Carbon
