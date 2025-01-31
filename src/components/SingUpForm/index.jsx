import React, { Component } from 'react';
import {
    RiUserFill,
    RiEyeOffFill,
    RiEyeFill,
    RiMailFill,
    RiMailCheckFill,
} from '@remixicon/react';

import styles from './SingUpForm.module.css';
import classNames from 'classnames';

const INITIAL_VALUES = {
    userName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
};
const REGEXP_NAME = /^.{3,5}$/;
const REGEXP_EMAIL =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const REGEXP_PASSWORD = /^.{8,10}$/;

class SingUpForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            userName: '',
            isUserName: false,
            email: '',
            isEmail: false,
            password: '',
            isPassword: false,
            passwordConfirmation: '',
            isPasswordConfirmation: false,
            isCheckPassword: false,
            isCheckRePassword: false,
        };
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState(INITIAL_VALUES);
    };
    handleUserNameChange = ({ target: { value } }) => {
        this.setState({ userName: value, isUserName: REGEXP_NAME.test(value) });
    };
    handleEmailChange = ({ target: { value } }) => {
        this.setState({ email: value, isEmail: REGEXP_EMAIL.test(value) });
    };
    handlePasswordChange = ({ target: { value } }) => {
        this.setState({
            password: value,
            isPassword: REGEXP_PASSWORD.test(value),
        });
    };
    handlePasswordConfirmationChange = ({ target: { value } }) => {
        const { password } = this.state;
        this.setState({
            passwordConfirmation: value,
            isPasswordConfirmation: value === password,
        });
    };
    render () {
        const {
            userName,
            email,
            password,
            passwordConfirmation,
            isUserName,
            isEmail,
            isPassword,
            isPasswordConfirmation,
            isCheckPassword,
            isCheckRePassword,
        } = this.state;

        const userNameStyle = classNames(styles.formInput, {
            [styles.inputValid]: isUserName,
            [styles.inputInValid]: !isUserName,
        });
        const userEmailStyle = classNames(styles.formInput, {
            [styles.inputValid]: isEmail,
            [styles.inputInValid]: !isEmail,
        });
        const userPasswordStyle = classNames(styles.formInput, {
            [styles.inputValid]: isPassword,
            [styles.inputInValid]: !isPassword,
        });
        const userRePasswordStyle = classNames(styles.formInput, {
            [styles.inputValid]: isPasswordConfirmation,
            [styles.inputInValid]: !isPasswordConfirmation,
        });
        return (
            <section className={styles.loginContainer}>
                <div className={styles.logoForm}>
                    <RiUserFill size={38} />
                </div>
                <h1 className={styles.title}>Sing Up</h1>
                <p className={styles.titleDescription}>Create account</p>

                <form
                    className={styles.formContainer}
                    onSubmit={this.handleSubmit}
                >
                    <label className={styles.formLabel}>
                        <input
                            onChange={this.handleUserNameChange}
                            className={userNameStyle}
                            type='text'
                            name='userName'
                            value={userName}
                            placeholder='Name'
                            autoFocus
                        />
                        <RiUserFill size={20} className={styles.icon} />
                    </label>
                    <label className={styles.formLabel}>
                        <input
                            onChange={this.handleEmailChange}
                            className={userEmailStyle}
                            type='email'
                            name='email'
                            value={email}
                            placeholder='email'
                        />
                        <div>
                            {isEmail ? (
                                <RiMailCheckFill
                                    size={20}
                                    className={styles.icon}
                                />
                            ) : (
                                <RiMailFill size={20} className={styles.icon} />
                            )}
                        </div>
                    </label>
                    <label className={styles.formLabel}>
                        <input
                            onChange={this.handlePasswordChange}
                            className={userPasswordStyle}
                            type={isCheckPassword ? 'text' : 'password'}
                            name='password'
                            value={password}
                            placeholder='password'
                        />
                        <div
                            onClick={() => {
                                this.setState({
                                    isCheckPassword: !isCheckPassword,
                                });
                            }}
                        >
                            {isCheckPassword ? (
                                <RiEyeFill size={20} className={styles.icon} />
                            ) : (
                                <RiEyeOffFill
                                    size={20}
                                    className={styles.icon}
                                />
                            )}
                        </div>
                    </label>
                    <label className={styles.formLabel}>
                        <input
                            onChange={this.handlePasswordConfirmationChange}
                            className={userRePasswordStyle}
                            type={isCheckRePassword ? 'text' : 'password'}
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            placeholder='re-enter password'
                        />
                        <div
                            onClick={() => {
                                this.setState({
                                    isCheckRePassword: !isCheckRePassword,
                                });
                            }}
                        >
                            {isCheckRePassword ? (
                                <RiEyeFill size={20} className={styles.icon} />
                            ) : (
                                <RiEyeOffFill
                                    size={20}
                                    className={styles.icon}
                                />
                            )}
                        </div>
                    </label>
                    <button type='submit' className={styles.btnForm}>
                        SingUp
                    </button>
                </form>
            </section>
        );
    }
}
export default SingUpForm;
