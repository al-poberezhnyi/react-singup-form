import SingUpForm from './components/SingUpForm';
import styles from './components/SingUpForm/SingUpForm.module.css';

function App () {
    return (
        <>
            <div className={styles.container}>
                <SingUpForm />
            </div>
        </>
    );
}

export default App;
