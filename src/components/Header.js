import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/steeze-and-needle-logo.png';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import userIcon from '../assets/user-icon.svg';
import cart from '../assets/cart.svg';

const Header = () => {
	return (
		<header className='flex flex-col justify-between mb-10 shadow-md h-auto md:h-[132px] bg-white'>
			<div className='flex items-center justify-center bg-primary text-sm text-white text-center h-auto md:h-[42px] py-[14px]'>
				Welcome to worldwide Steeze & Needle
			</div>

			<div className='flex items-center h-full'>
				<div className='container mx-auto px-4 py-4 flex lg:items-center justify-between max-w-[1200px] h-auto lg:h-[48px] lg:space-y-4'>
					{/* Logo */}
					<div className=''>
						<Link to='/' className='hover:text-primary-light'>
							<img src={logo} alt='steeze and needle logo' className='w-3/4 lg:w-[188px] h-auto lg:h-[43px]' />
						</Link>
					</div>

					{/* User Profile / Cart */}
					<div className='flex flex-col md:flex-row items-end md:space-x-4 lg:space-x-8 space-y-1 lg:space-y-4'>
						<div className='flex items-center justify-between gap-3 rounded-md border border-primary px-2 lg:px-4 py-1 lg:mr-4 w-full xl:w-[475px]'>
							<img src={search} className='w-[12px] lg:w-auto' alt='Search' />
							<input
								type='text'
								className='w-full text-sm lg:text-base outline-none'
								placeholder='Search artisans, fabrics and more...'
							/>
							<img src={menu} className='w-[12px] lg:w-auto' alt='Menu' />
						</div>

						<div className='flex items-center w-full gap-4'>
							<Link to='/profile' className='flex items-center gap-1 hover:text-primary-light'>
								<img src={userIcon} className='w-[16px] lg:w-auto' alt='user-icon' />
								<small>Sign Up/Sign In</small>
							</Link>
							<Link to='/cart' className='flex items-center gap-1 hover:text-primary-light'>
								<img src={cart} className='w-[16px] lg:w-auto' alt='user-cart' />
								<small>Cart</small>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
