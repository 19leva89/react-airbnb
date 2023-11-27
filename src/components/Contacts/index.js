import Description from '../Description'
import Heading from '../Heading'
import './index.css'

export default function Contacts({
	name,
	image,
	response_rate,
	response_time,
	info,
	phone,
}) {
	return (
		<div className='contacts'>
			<img src={image} alt={name} className="avatar" />

			<div className='title'>
				<Heading>Господар - {name}</Heading>

				<div className='title__sub-block'>
					<span className='title__sub-value'>{phone}</span>
					<span className='title__sub-value'>{response_time}</span>
					<span className='title__sub-value'>{response_rate}% відсотків швидкості відгуку</span>
				</div>
			</div>

			<Description>{info}</Description>
		</div>
	)
}