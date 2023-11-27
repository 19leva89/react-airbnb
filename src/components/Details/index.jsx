import './index.css'
import Box from '../Box'
import ListItem from '../ListItem'
import guest from './guest.svg'
import parentSharp from './parent-sharp.svg'
import bed from './bed.svg'
import bathroom from './bathroom.svg'
import Heading from '../Heading'

export default function Details({ guests, bedrooms, beds, baths }) {
	return (
		<Box className="details" shadow>

			<Heading border>Деталі властивості:</Heading>

			<ul className='details__list'>

				<ListItem imageSrc={guest}>
					<span>{guests} гості</span>
				</ListItem>

				<ListItem imageSrc={parentSharp}>
					<span>{bedrooms} спальня</span>
				</ListItem>

				<ListItem imageSrc={bed}>
					<span>{beds} ліжко</span>
				</ListItem>

				<ListItem imageSrc={bathroom}>
					<span>{baths} ванна кімната</span>
				</ListItem>
			</ul>
		</Box>

	)
}