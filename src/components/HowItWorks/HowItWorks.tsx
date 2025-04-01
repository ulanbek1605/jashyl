import React from 'react'
import './howItWorks.css'
import Image from 'next/image'

const data = [
	{
		id: 1,
		image: '/images/img/workCard.png',
		svg: '/images/svg/cardSVG.svg',
		title: 'Помощь экологии — наглядный вклад в чистоту планеты.'
	},
	{
		id: 2,
		image: '/images/img/workCard.png',
		svg: '/images/svg/cardSVG.svg',
		title: 'Помощь экологии — наглядный вклад в чистоту планеты.'
	},
	{
		id: 3,
		image: '/images/img/workCard.png',
		svg: '/images/svg/cardSVG.svg',
		title: 'Помощь экологии — наглядный вклад в чистоту планеты.'
	},
	{
		id: 4,
		image: '/images/img/workCard.png',
		svg: '/images/svg/cardSVG.svg',
		title: 'Помощь экологии — наглядный вклад в чистоту планеты.'
	},
]
function HowItWorks() {
	return (
		<div className='works_block'>
			<div className="works_block_title">
				<div className="work_title">
					<Image src="/images/svg/workImg.svg" className='work_title-img' alt="Logo" width={0} height={0} sizes={'100%'} />
					<h2>Как это работает?</h2>
				</div>
				<div className="work_text"> Создания доверия там, где его может не быть, открывая совершенно новые рынки и возможности.</div>
			</div>
			<div className='works_cards'>{
				data.map((item: any) => (
					<div key={item.id} className="works_card" style={{ backgroundImage: `url('${item.image}')` }}>
						<div className='work_card_inner'>
							<Image src={item.svg} className='work_inner-img' alt="Logo" width={0} height={0} sizes={'100%'} />
							<p>
								{item.title}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="our_mission">
				<div className='btn_mobile'>
					<button className='btn_mission'>Read More</button>
				</div>
				<div className="mission-left">
					<Image src="/images/img/ourMission.png" className='mission_left-img' alt="our mission" width={0} height={0} sizes={'100%'} />
				</div>
				<div className="mission-right">
					<h3>Наша миссия</h3>
					<p>Платформа создается и расширяется с помощью протоколов улучшения и усовершенствования. Наша система дает каждому демократическое право голоса; держатели могут подавать или голосовать за предложения по обновлению платформы или помогать определять направление</p>
					<button className='btn_mission'>Read More</button>
				</div>
			</div>
		</div >
	)
}

export default HowItWorks