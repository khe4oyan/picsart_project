import React, { useEffect, useState } from 'react'
import './SignUp.css'
import CustomInput from '../CustomInput/CustomInput'
import PassChecker from '../PassChecker/PassChecker';
import tools from './tools';

export default function SignUp({ setModalName }) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [pass, setPass] = useState('');
	const [passValidStatus, setPassValidStatus] = useState(tools.isValidPass(pass));
	const [confPass, setConfPass] = useState('');
	const [agreeUpdate, setAgreeUpdate] = useState(false);

	useEffect(() => {
		setPassValidStatus(tools.isValidPass(pass));
	}, [pass]);

	return (
		<div className='signUp'>
			<h2 className='modal__title'>Create an account</h2>
			<CustomInput
				value={fullName}
				setValue={setFullName}
				placeholder='Full name'
			/>

			<CustomInput
				value={email}
				setValue={setEmail}
				placeholder={'Email'}
				inputType='email'
			/>

			<div className='signUp__numberBox'>
				<div className='customInput__input signUp__numberBoxPrefix center'>
					<div className='signUp__numberBox__flag'></div>
					<p className='signUp__numberBox__prefixNumber'>+374</p>
				</div>

				<CustomInput
					value={number}
					setValue={setNumber}
					placeholder='(--) -- -- --'
					inputType='number'
				/>
			</div>

			<div className='signUp__passwordBox'>
				<PassChecker statuses={passValidStatus} />
				<CustomInput
					value={pass}
					setValue={setPass}
					placeholder={'Password'}
					inputType='password'
				/>
			</div>

			<CustomInput
				value={confPass}
				setValue={setConfPass}
				placeholder={'Confirm password'}
			/>

			<div className='signUp__agreeUpdates' onClick={() => { setAgreeUpdate(prev => !prev) }}>
				<div className={`signUp__agreeUpdates__checkbox center ${agreeUpdate && 'signUp__agreeUpdates__checkbox_checked'}`}></div>
				<p className='signUp__agreeUpdates__text'>I agree to receive email updates</p>
			</div>

			<button className='button signUp__button'>Sign Up</button>
			<p className='signUp__underLink'>Already have an account ? <span onClick={() => { setModalName('signIn') }}>Sign In</span></p>
		</div>
	)
}