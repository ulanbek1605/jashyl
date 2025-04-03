import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './recycling.css'
const recyclingData = [
	{
		id: 1,
		svg: '/images/svg/recyclingData1.svg',
		title: 'Макалатура',
		description: 'Отправная точка для каждой новой возможности.'
	},
	{
		id: 2,
		svg: '/images/svg/recyclingData1.svg',
		title: 'Железо',
		description: 'Наши планы и структура уникальны.'
	},
	{
		id: 3,
		svg: '/images/svg/recyclingData1.svg',
		title: 'Пища',
		description: 'Это платформа для построения доверия там.'
	},
	{
		id: 4,
		svg: '/images/svg/recyclingData1.svg',
		title: 'Пластик',
		description: 'Наши планы  затрагивают множество различных.'
	},
]
function Recycling() {
	return (
		<div className='recycling'>
			<div className='recycling_title'>
				<h2>
					<Image src="/images/svg/recycGreen.svg" className='title_img-absolute' alt="Logo" width={0} height={0} sizes={'100%'} />
					Что мы принимаем?
				</h2>
				<Link href="#vending">
					<button className='btn_mission'>Карта фандоматов</button>
				</Link>


			</div>

			<div className='recycling_cards'>
				{
					recyclingData.map((item: any) => (
						<div className="recycling_card" key={item.id}>
							<div className='recycling_card-img'>
								<Image src={item.svg} alt="Logo" width={0} height={0} sizes={'100%'} />
							</div>
							<div className='recycling_card-desc'>
								<h6>{item.title}</h6>
								<p>{item.description}</p>
							</div>
						</div>

					))
				}

			</div>
			<div className='reserve-btn'>
				<Link href="#vending">
					<button className='btn_mission'>Карта фандоматов</button>
				</Link>
			</div>
		</div>
	)
}

export default Recycling