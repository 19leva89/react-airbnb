import './index.css'
import Box from '../Box'
import Heading from '../Heading'
import ListItem from '../ListItem'
import pool from './pool.svg'
import gym from './gym.svg'
import breakfast from './breakfast.svg'
import wifi from './wifi.svg'
import parking from './parking.svg'
import pets from './pets.svg'
import airportShuttle from './airport-shuttle.svg'
import concierge from './concierge.svg'
import roomService from './room-service.svg'
import child from './child.svg'


export default function Amenities(
	{
		hasPool,
		hasGym,
		hasFreeBreakfast,
		hasFreeWiFi,
		hasParking,
		hasPetsAllowed,
		hasAirportShuttle,
		hasConciergeService,
		hasRoomService,
		hasChildFriendly,
	}
) {
	return (
		<Box className="amenities" shadow>

			<Heading border>Зручності</Heading>

			<ul className='amenities__list'>

				{hasPool ? (
					<ListItem imageSrc={pool}>
						<span>Басейн</span>
					</ListItem>
				) : null}

				{hasGym ? (
					<ListItem imageSrc={gym}>
						<span>Спортивний зал</span>
					</ListItem>
				) : null}

				{hasFreeBreakfast ? (
					<ListItem imageSrc={breakfast}>
						<span>Безкоштовний сніданок</span>
					</ListItem>
				) : null}

				{hasFreeWiFi ? (
					<ListItem imageSrc={wifi}>
						<span>Безкоштовний Wi-Fi</span>
					</ListItem>
				) : null}

				{hasParking ? (
					<ListItem imageSrc={parking}>
						<span>Безкоштовний вуличний паркінг</span>
					</ListItem>
				) : null}

				{hasPetsAllowed ? (
					<ListItem imageSrc={pets}>
						<span>Дозволено розміщення з домашніми тваринами</span>
					</ListItem>
				) : null}

				{hasAirportShuttle ? (
					<ListItem imageSrc={airportShuttle}>
						<span>Трансфер до/з аеропорту</span>
					</ListItem>
				) : null}

				{hasConciergeService ? (
					<ListItem imageSrc={concierge}>
						<span>Консьєрж-сервіс</span>
					</ListItem>
				) : null}

				{hasRoomService ? (
					<ListItem imageSrc={roomService}>
						<span>Обслуговування номерів</span>
					</ListItem>
				) : null}

				{hasChildFriendly ? (
					<ListItem imageSrc={child}>
						<span>Підходить для дітей</span>
					</ListItem>
				) : null}

			</ul>
		</Box>
	)
}