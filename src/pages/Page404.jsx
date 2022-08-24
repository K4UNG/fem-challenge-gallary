import styles from './Page404.module.css';
import { useNavigate } from 'react-router-dom';

export default function Page404() {
    const navigate = useNavigate()
    return <div className={styles.wrapper}>
        <div className={styles.content}>
            <h1>Error 404. Page not found.</h1>
            <h2>Whoa, Whoa, turn around! You're on the wrong path!</h2>
            <button className={styles.home} onClick={() => navigate('/', {replace: true})}>Back to Home</button><br/>
            <img src="/images/404.png" alt="shiba inu" />
        </div>
    </div>
}