import { Fragment } from 'react'
import './index.css'
import Heading from '../Heading'
import Box from '../Box'

export default function Reviews({ list }) {
	return (
		<div className='review__block'>
			<Heading>Відгуки клієнтів</Heading>

			<div className='review__list'>
				{list.map(({ id, ...rest }) => (
					<Fragment key={id}>
						<Item {...rest} />
					</Fragment>
				))}
			</div>
		</div>
	)
}

function Item({ guestName: name, rating, review }) {
	return (
		<Box className='review'>
			<div className='review__title'>
				<span className='review__author'>{name}</span>
				<span className='review__rating'>Рейтинг: {rating}</span>
			</div>
			<span className='review__text'>{review}</span>
		</Box>
	)
}