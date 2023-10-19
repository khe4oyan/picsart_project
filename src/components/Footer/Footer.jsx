import React from 'react'
import './Footer.css'
import streamImg from '../../img/mainLogo.png';
import fb from './social/fb.png'
import insta from './social/insta.png'
import linkedIn from './social/in.png'

export default function Footer() {
	return (
		<footer className='footer container'>
			<div className='footer__container'>
				<div className="box">
					<img className='footer__img' src={streamImg} alt="stream_img" />
					<p className='footer__title'>
						Discover endless learning possibilities on Picsart Academy Stream.
						Dive into a diverse collection of informative vieos, curated to inspire your journey.
					</p>
				</div>

				<div className="box box__collumn">
					<a href='#'>About us</a>
					<a href='#'>FAQs</a>
					<a href='#'>Pricing</a>
					<a href='#'>Contact us</a>
				</div>

				<div className="box box__collumn">
					<a href='#'>Terms and conditions</a>
					<a href='#'>Privacy policy</a>
					<a href='#'>Sitemap</a>
					<a href='#'>Technical support</a>
				</div>

				<div className="box box__social center">
					<img src={fb} alt="fb_logo" />
					<img src={insta} alt="insta_logo" />
					<img src={linkedIn} alt="linkedIn_logo" />
				</div>
			</div>

			<p className='footer__copyright'>
				© {new Date().getFullYear()} Picsart Academy Stream, Inc.
			</p>
		</footer>
	)
}
