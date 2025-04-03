import React from 'react'
import Image from 'next/image'
import './bonuses.css'
const bonuses = [
	{
		id: 1,
		image: '/images/img/globus.png',
		title: 'Скидки до 30% заказ'
	},
	{
		id: 2,
		image: '/images/img/lining.png',
		title: 'Скидки на первый заказ'
	},
	{
		id: 3,
		image: '/images/img/kulikov.png',
		title: 'Бесплатная доставка '
	},
	{
		id: 4,
		image: '/images/img/siera.png',
		title: 'Скидки до 50% заказ'
	}
]
function Bonuses() {
	return (
		<div className='bonuses' id='bonuses'>
			<div className="bonuses_title">
				<div className='bonuses_title_inner'>
					<Image src="/images/svg/recycGreen.svg" alt="bonuses-icon" width={91} height={38} />
					<h2>На что можно обменять бонусы?</h2>
				</div>
				<div className='bonuses_title_text'>
				Наши партнеры предоставят вам приятные бонусы за ваши накопленные баллы
				</div>
			</div>

			<div className='bonuses_cards'>
				{
					bonuses.map(item => (
						<div className="bonuses_card" key={item.id}>
							<div className='bonuses_card-img'>
								<Image src={item.image} alt="bonuses-img" width={0} height={0} sizes={'100%'} />
							</div>
							<div className='bonuses_description'>
								{item.title}
							</div>
						</div>
					))
				}

			</div>
		</div>
	)
}

export default Bonuses