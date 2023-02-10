import styles from './Landing.module.css'
import logo from '../../assets/teal-pick-larger.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
        <h1 className={styles.landingTitle}>PIX</h1>
      <div className={styles.landingBackground}>
        <img src={logo} alt="large-teal-pick" />
      </div>
    </main>
  )
}

export default Landing
