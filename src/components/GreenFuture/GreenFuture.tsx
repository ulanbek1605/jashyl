import React from 'react'
import Image from 'next/image'
import './greenFuture.css'
function GreenFuture() {
	return (
		<div className='global_container'>
			<div className='greenfuture'>
				<h2 className='greenfuture_title'>
					<Image src="/images/svg/green.svg" className='greenfuture_title-green' alt="Logo" width={0} height={0} sizes={'100%'} />
					<span>Зе</span>леное будущее</h2>

				<section className="eco-section">
					<div className="grid-container">
						{/* Верхний синий блок */}
						<div className="explore">
							<div className='explore_block'>
								<p>Исследуйте мир -</p>
								<h3>
									Собирайте <Image className='circle' src="/images/svg/circle.svg" alt='circle' width={0} height={0} sizes={'100%'} /> Сдавайте
								</h3>
							</div>
						</div>

						{/* Верхний зеленый блок */}
						<div className="bonus">
							<div className="bonus_first_block">
								<p>Балансировка выбросов углекислого газа платформы</p>
								<Image className='logoBonus' src="/images/svg/logoBonus.svg" alt='logo' width={0} height={0} sizes={'100%'} />
							</div>
							<h3>Получайте бонусы!</h3>
							<div className='bonus_icon_absolute-one'>
								<Image className='bonus_icon-one' src="/images/svg/bonusIcon1.svg" alt='logo' width={0} height={0} sizes={'100%'} />
							</div>
							<div className='bonus_icon_absolute-two'>
								<Image className='bonus_icon-two' src="/images/svg/bonusIcon2.svg" alt='logo' width={0} height={0} sizes={'100%'} />
							</div>
						</div>

						{/* Изображение природы */}
						<div className="nature">
							<Image
								src="/images/img/nature.png"
								alt="Природа"
								width={0}
								height={0}
								sizes='100&'
								className="nature-image"
							/>
						</div>

						{/* Черный блок с текстом */}
						<div className="vending">
							<p>Фандоматы — это простой способ внести вклад в экологию.</p>

						</div>
					</div>
				</section>
			</div>

		</div>
	)
}

export default GreenFuture