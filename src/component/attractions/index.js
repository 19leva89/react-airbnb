import './index.css'
import Heading from '../heading'
import Box from '../box'
import { Fragment } from 'react'

export default function Attractions({ list }) {
	return (
		<Box className='attraction__block' shadow>

			<Heading border>Пам'ятки поблизу</Heading>

			<div className='attraction__list'>
				{list.map(({ id, ...rest }) => (
					<Fragment key={id}>
						<Item {...rest} />
					</Fragment>
				))}
			</div>

		</Box>
	)
}

function Item({ name, link }) {
	return (
		<a href={link} className='attraction__link'>{name}</a>
	)
}