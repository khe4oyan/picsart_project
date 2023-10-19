import React from 'react'
import './Header.css'
import streamImg from '../../img/mainLogo.png';

export default function Header({ setModalName }) {
	const signUpClick = () => {
		setModalName('signIn');
	}

	const navigationSectionsNames = [
		'About',
		'Pricing',
		'FAQ',
	];

	return (
		<header className='header container'>
			<div className='header__box header__box_1'>
				<img className='header__logo' src={streamImg} alt="headerLogo" />

				<div className='header__navigation center'>
					{
						navigationSectionsNames.map((item, i) =>
							<p className='header__navigation__p' key={`navigation_${i}`}>{item}</p>
						)
					}
				</div>
			</div>

			<div className='header__box header__box_2'>
				<button className='button header__box__signInButton' onClick={signUpClick}>Sign In</button>
			</div>
		</header>
	)
}
