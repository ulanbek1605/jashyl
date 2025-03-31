'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './header.css'
import { usePathname } from 'next/navigation'
function Header() {
	const pathName = usePathname()
	return (
		<div className='global_container'>
			<div className='header'>
				<Link href='/' className="header_logo">
					<Image src="/images/svg/logo.svg" alt="Logo" width={50} height={50} />
				</Link>
				<nav className="header_nav">
					<Link href="/" className={pathName === '/' ? 'active' : ''}>Главная</Link>
					<Link href="/about" className={pathName === '/about' ? 'active' : ''}>О нас</Link>
					<Link href="/vending" className={pathName === '/vending' ? 'active' : ''}>Фандоматы</Link>
					<Link href="/management" className={pathName === '/management' ? 'active' : ''}>Управление</Link>
				</nav>
				<div className="social-icons">
					<Image src="/images/svg/twitter.svg" alt="Twitter" width={20} height={20} />
					<Image src="/images/svg/instagram.svg" alt="Instagram" width={20} height={20} />
					<Image src="/images/svg/linkedin.svg" alt="LinkedIn" width={20} height={20} />
				</div>
			</div>
		</div>
	)
}

export default Header