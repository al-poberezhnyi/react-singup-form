import React, { Component } from 'react';
import { RiUserFill, RiEyeOffFill } from '@remixicon/react';

import styles from './SingUpForm.module.css';

class SingUpForm extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }
    render () {
        return (
            <section className={styles.loginContainer}>
                <div className={styles.logoForm}>
                    <RiUserFill size={38} />
                </div>
                <h1 className={styles.title}>Login</h1>
                <p className={styles.titleDescription}>Por favor</p>
                <form className={styles.formContainer}>
                    <label className={styles.formLabel}>
                        <input
                            className={styles.formInput}
                            type='email'
                            name='email'
                            placeholder='login'
                            autoFocus
                        />
                        <RiUserFill size={20} className={styles.icon} />
                    </label>
                    <label className={styles.formLabel}>
                        <input
                            className={styles.formInput}
                            type='password'
                            name='password'
                            placeholder='password'
                        />
                        <RiEyeOffFill size={20} className={styles.icon} />
                    </label>
                    <button className={styles.btnForm}>Enter</button>
                </form>
            </section>
        );
    }
}
export default SingUpForm;
