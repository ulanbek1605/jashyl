'use client'
import React, { useState } from 'react'
import './footer.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Footer() {
	const pathname = usePathname()
	console.log(pathname);
	const [emailData, setEmailData] = useState('')


	const handleSendEmail = () => {
		if (!emailData) return;

		const mailtoLink = `mailto:jashylbonus@gmail.com?subject=Запрос&body=Email пользователя: ${emailData}`;
		window.location.href = mailtoLink;
	};
	return (
		<>
			<div className={pathname === '/privacy-policy' || pathname === '/user-arguments' ? 'containerHidden' : 'global_container'}>
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

			<div className={pathname === '/privacy-policy' || pathname === '/user-arguments' ? 'footerInfoPolicy' : 'footerInfo'}>
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
							value={emailData}
							onChange={(e) => setEmailData(e.target.value)}
						/>
					</div>
					<button className="btn-email" onClick={handleSendEmail}>
						Попробовать
					</button>
				</div>

				<div className='footer-config'>
					<Link href="/privacy-policy" > <p>Политика конфиденциальности</p></Link>
					<Link href="/user-arguments" > <p>Пользовательскае соглашение</p></Link>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="global_container">
					<div className='footerBottom'>
						<p>Создание сайта <Link href="https://prolabagency.com/?rel=jashyl-bonus.kg">'PROlab Agency'</Link></p>
						<div className="social-icons">
							<Link href="https://www.facebook.com/profile.php?id=61573840172596" className="">
								<Image src="/images/svg/fc.svg" alt="Facebook" width={30} height={30} />
							</Link>
							<Link href="https://www.instagram.com/jashyl.bonus" className="">
								<Image src="/images/svg/instagram.svg" alt="Instagram" width={30} height={30} />
							</Link>
							<Link href="https://www.tiktok.com/@jashyl_bonus" className="">
								<Image src="/images/svg/tiktok.svg" alt="Tiktok" width={30} height={30} />
							</Link>
							<Link href="https://t.me/jashyl_bonus" className="">
								<Image src="/images/svg/tg.svg" alt="Telegram" width={30} height={30} />
							</Link>
						</div>
						<p>© 2025 Все права защищены.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer