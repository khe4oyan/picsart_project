import React, { useState } from 'react';
import './App.css';
import 'resetcss_khc/index.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'

export default function App() {
	const [isLogined, setIsLogined] = useState(false);
	const [modalName, setModalName] = useState(null);

	return (
		<div className="app">
			<Header setModalName={setModalName} />
			<Main />
			<Footer />
			
			{
				modalName !== '' &&
				<Modal setModalName={setModalName}>
					{ modalName === 'signIn' && <SignIn /> }
					{ modalName === 'signUp' && <SignUp /> }
				</Modal>
			}
		</div>
	);
}