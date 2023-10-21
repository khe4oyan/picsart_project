import React, { useState } from 'react'
import './SignIn.css'
import CustomInput from '../CustomInput/CustomInput'
import fakeDB from './fakeDB';

export default function SignIn({setModalName, setIsLogined}) {
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');

	const sendToServer = () => {
		// fake server function
		if (fakeDB[login] === pass) {
			setModalName(null);
			setIsLogined(true);
		}
	}

	return (
		<div className='signIn'>
			<h2 className='modal__title'>Sign In</h2>
			<CustomInput
				value={login}
				setValue={setLogin}
				placeholder={'Email'}
			/>
			
			<CustomInput
				value={pass}
				setValue={setPass}
				placeholder={'Password'}
				inputType={'password'}
			/>

			<button className='button signIn__button' onClick={sendToServer}>Sign In</button>
			<p className='signIn__signUpLink'>Don't have an account ? <span onClick={() => {setModalName('signUp')}}>Sign Up</span></p>
		</div>
	)
}
