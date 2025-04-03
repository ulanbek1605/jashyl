import React from 'react'
import './map.css'
import Image from 'next/image'
import Link from 'next/link'
function Map() {
	return (
		<div className='map' id='vending'>
			<div className='position_icon-left'>
				<Image src='/images/svg/mapIcon.svg' alt="icon" width={309} height={128} sizes={'100%'} />
			</div>
			<div className='position_icon-right'>
				<Image src='/images/svg/mapIcon.svg' alt="icon" width={309} height={128} sizes={'100%'} />
			</div>

			<div className='map-text'>
				<div className='map-top'>
					<Image src='/images/svg/lump.svg' alt="icon" width={30} height={23} sizes={'100%'} />
					<p>Делай хорошо, приноси прибыль</p>
					<span className='after-line'></span>
				</div>
				<h2>Вместе мы делаем мир чище
					<Image className='absol' src='/images/img/linegreen.png' alt="icon" width={0} height={0} sizes={'100%'} />
				</h2>
				<p className='map-description'>Мы верим, что маленькие шаги приводят к большим изменениям. Сдавая вторсырьё, вы помогаете уменьшить загрязнение планеты.
				</p>
				<div className='map-btn'>
					<Link href="https://t.me/jashyl_bonus">
						<button className='btn_mission'>
							<Image src='/images/svg/mapbtn.svg' alt="icon" width={20} height={20} sizes={'100%'} />
							<p>
								Написать
							</p>
						</button>
					</Link>
				</div>
			</div>


			<div className='map-container'>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.927659477146!2d72.78862387452013!3d40.5431873479354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdabf76c64ebd9%3A0x4a752a2da00d88cb!2zMzE2INCj0LvQuNGG0LAg0JvQtdC90LjQvdCwLCDQntGIIDY5MzAwNg!5e0!3m2!1sru!2skg!4v1743516031093!5m2!1sru!2skg"
					width="100%"
					height="100%"
					style={{ border: 0, borderRadius: 'inherit' }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	)
}

export default Map