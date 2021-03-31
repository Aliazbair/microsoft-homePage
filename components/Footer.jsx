import styles from '../styles/footer.module.css'

const Footer = () => {
  return  <footer className={styles.footer}>
  <div class={styles.footerInner}>
    <div><i class="fas fa-globe fa-2x"></i> English (United States)</div>
    <ul>
      <li><a href="#">Sitemap</a></li>
              <li><a href="#">Contact Microsoft</a></li>
              <li><a href="#">Privacy & cookies</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Trademarks</a></li>
              <li><a href="#">Safety & eco</a></li>
              <li><a href="#">About our ads</a></li>
              <li><a href="#">&copy; Microsoft 2020</a></li>
    </ul>
  </div>
</footer>
}

export default Footer
