import Heading from '../Heading'
import './index.css'

export default function Description({ title, children }) {
	return (
		<div className='description'>
			<Heading>{title}</Heading>

			<p className='description__text'>{children}</p>
		</div>
	)
}