import React from 'react'
import './partners.css'
import Image from 'next/image'
const partners = [
	{
		id: 1,
		image: '/images/svg/kulikov.svg'
	},
	{
		id: 2,
		image: '/images/svg/kulikov.svg'
	},
	{
		id: 3,
		image: '/images/svg/lining.svg'
	},
	{
		id: 4,
		image: '/images/svg/globus.svg'
	},
	{
		id: 5,
		image: '/images/svg/lining.svg'
	},
	{
		id: 6,
		image: '/images/svg/lining.svg'
	},
]
function Partners() {
	return (
		<div className='partners'>
			<h2 className='partners_title'>
				Наши партнеры
			</h2>
			<div className='partners_list'>
				{
					partners.map(item => (
						<div className='partners_card' key={item.id}>
							<Image src={item.image} alt="partners-icon" width={105} height={78} />
						</div>
					))
				}

			</div>
		</div>
	)
}

export default Partners