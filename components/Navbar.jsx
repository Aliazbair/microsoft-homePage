import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className=''>
      <nav className={styles.mainNav}>
        <img src='' alt='' className={styles.logo} />
        <ul className={styles.mainMenu}>
          <li>
            <Link href=''>Office</Link>
          </li>
          <li>
            <Link href='#'>Windows</Link>
          </li>
          <li>
            <Link href='#'>Surface</Link>
          </li>
          <li>
            <Link href='#'>Xbox</Link>
          </li>
          <li>
            <Link href='#'>Deals</Link>
          </li>
          <li>
            <Link href='#'>Support</Link>
          </li>
        </ul>
        <ul className={styles.rigthMenu}>
          <li>
            <a>
              <i className='fas fa-search'></i>
            </a>
          </li>
          <li>
            <a>
              <i className='fas fa-shopping-cart'></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
