'use client'
import React from 'react'
import './footer.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Footer() {
	const pathname = usePathname()
	console.log(pathname);

	return (
		<>
			<div className={pathname === '/privacy-policy' ? 'containerHidden' : 'global_container'}>
				<div className="footer_block">
					<div className='footer_img'>
						<Image src='/images/img/footer.png' alt="Footer" width={0} height={0} sizes={'100%'} />
					</div>

					<div className='footer_ques'>
						<div className='footer_left'>
							<div className='footer_title-absolute'>
								<Image src='/images/svg/footerbg.svg' className='first' alt="Footer" width={0} height={0} sizes={'100%'} />
								<Image src='/images/svg/footerlineright.svg' className='second' alt="Footer" width={0} height={0} sizes={'100%'} />
								<h4> <span>Вы</span> готовы улучшить наш мир?</h4>
								<Image src='/images/svg/footerbottom.svg' className='third' alt="Footer" width={0} height={0} sizes={'100%'} />
							</div>
							<div className='store-img'>
								<Image src='/images/svg/googleplay.svg' className='play' alt="Footer" width={0} height={0} sizes={'100%'} />
								<Image src='/images/svg/appstore.svg' className='store' alt="Footer" width={0} height={0} sizes={'100%'} />
							</div>
						</div>
						<div className='footer_right'>
							<Image src='/images/img/phone.png' alt="Footer" width={0} height={0} sizes={'100%'} />
						</div>
					</div>
				</div>
			</div>

			<div className={pathname === '/privacy-policy' ? 'footerInfoPolicy' : 'footerInfo'}>
				<div className="footerLogo">
					<Image src='/images/svg/footerLogo.svg' alt="FooterLogo" width={0} height={0} sizes={'100%'} />
				</div>
				<div className="footerTitle">
					Начните развивать свой бизнес с <br /> персональным менеджером
				</div>
				<div className='email-block'>
					<div className="input-container">
						<span className="icon">
							<Image src='/images/svg/inputIcon.svg' alt="FooterLogo" width={20} height={20} />
						</span>
						<input
							type="email"
							placeholder="Введите адрес электронной почты"
							className="input"
						/>
					</div>
					<button className='btn-email'>Попробовать</button>
				</div>

				<div className='footer-config'>
					<Link href="/privacy-policy" > <p>Условия конфиденциальности</p></Link>
					<Link href="/privacy-policy" > <p>Политика</p></Link>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="global_container">
					<div className='footerBottom'>
						<p>Создание сайта 'PROlab Agency'</p>
						<div className="social-icons">
							<Image src="/images/svg/twitter.svg" alt="Twitter" width={20} height={20} />
							<Image src="/images/svg/instagram.svg" alt="Instagram" width={20} height={20} />
							<Image src="/images/svg/linkedin.svg" alt="LinkedIn" width={20} height={20} />
						</div>
						<p>© 2024 Все права защищены.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer