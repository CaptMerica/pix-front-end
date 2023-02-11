import styles from './Landing.module.css'

const Landing = ({ user }) => {

  const landingPhoto = 'https://i.imgur.com/CZoAtq4.png'

  return (
    <main className={styles.container}>
        <h1 className={styles.landingTitle}>PIX</h1>
      <div className={styles.landingBackground}>
        <img src={landingPhoto} alt='landing' />
      </div>
    </main>
  )
}

export default Landing
