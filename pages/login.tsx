import { useState } from 'react';
import styles from '../styles/Login.module.css';
import {
  SignInWithemailAndPassword,
  registerWithEmailAndPassword,
} from '../lib/firebase';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleSignIn = () => {
    SignInWithemailAndPassword(email, password);
  };
  const handleCreateUser = () => {
    registerWithEmailAndPassword(email, password);
  };
  return (
    <section className={styles.wrapper}>
      <h1>Hello I'm SCS Management System 👋</h1>
      <main className={styles.loginArea}>
        <h2 className={styles.title}>Sign In</h2>
        <div>
          <input
            type="email"
            className={styles.input}
            placeholder="emal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className={styles.input}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSignIn} className={styles.button}>
            Sign In
          </button>
          <button onClick={handleCreateUser} className={styles.button}>
            Create User
          </button>
        </div>
      </main>
    </section>
  );
};

export default LoginPage;
