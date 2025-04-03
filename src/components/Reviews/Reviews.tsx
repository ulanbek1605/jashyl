import React from 'react'
import './reviews.css'
import Image from 'next/image'
const reviews = [
	{
		id: 1,
		title: "Мечта сбылась",
		name: 'Асан',
		description: 'Несколько абзацев и конференции, любой может поделиться, присоединиться или стать организатором ',
		image: "/images/img/avatarreviews.png",
		profession: 'Дизайнер',
		country: 'Индонезия'
	},
	{
		id: 2,
		title: "Мечта сбылась",
		name: 'Асан',
		description: 'Несколько абзацев и конференции, любой может поделиться, присоединиться или стать организатором ',
		image: "/images/img/avatarreviews.png",
		profession: 'Дизайнер',
		country: 'Индонезия'
	},
	{
		id: 3,
		title: "Мечта сбылась",
		name: 'Асан',
		description: 'Несколько абзацев и конференции, любой может поделиться, присоединиться или стать организатором ',
		image: "/images/img/avatarreviews.png",
		profession: 'Дизайнер',
		country: 'Индонезия'
	},
	{
		id: 4,
		title: "Мечта сбылась",
		name: 'Асан',
		description: 'Несколько абзацев и конференции, любой может поделиться, присоединиться или стать организатором ',
		image: "/images/img/avatarreviews.png",
		profession: 'Дизайнер',
		country: 'Индонезия'
	}
]
function Reviews() {
	return (
		<div className='reviews' id='reviews'>
			<div className="reviews_left">
				<h6> что о нас говорят</h6>
				<h1>Отзывы <br /> пользователей</h1>
				<div className='reviews_icon-block'>
					<Image src="/images/svg/reviewsIcon.svg" alt="reviews-icon" width={274} height={53} />
				</div>
			</div>
			<div className="reviews_rigth">
				{
					reviews.map(item => (
						<div className="reviews_card" key={item.id}>
							<div className='reviews_card-top'>
								<h2 className="reviews_card-title">"{item.title}"</h2>
								<div className="reviews_card-description">{item.description} </div>
							</div>
							<div className="reviews_card-userBlock">
								<div className='reviews_card_photo'>
									<Image src={item.image} alt="reviews-icon" width={38} height={38} />
								</div>
								<div className='reviews_card_data'>
									<h3>{item.name}</h3>
									<p>{item.profession}, {item.country}.</p>
								</div>
							</div>

						</div>
					))
				}

			</div>

		</div>
	)
}

export default Reviews