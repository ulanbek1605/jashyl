import React from 'react'
import './footer.css'
import Image from 'next/image'
function Footer() {
	return (
		<div className='global_container'>
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

				<div className=''></div>
			</div>
		</div>
	)
}

export default Footer