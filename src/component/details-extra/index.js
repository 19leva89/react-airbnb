import './index.css'
import Box from '../box'
import Heading from '../heading'
import ListItem from '../list-item'

export default function DetailsExtra({ rules, cancellation_policy, transportation, languages, offers, instructions }) {
	return (
		<Box className="details-extra" shadow>

			<Heading border>Додаткові властивості:</Heading>

			<ul className='details-extra__list'>

				<ListItem title={'Правила дому'}>
					<span>{rules}</span>
				</ListItem>

				<ListItem title={'Політика скасування'}>
					<span>{cancellation_policy}</span>
				</ListItem>

				<ListItem title={'Місцевий транспорт'}>
					<span>{transportation}</span>
				</ListItem>

				<ListItem title={'Мови хоста'}>
					<span>{languages.join(', ')}</span>
				</ListItem >

				<ListItem title={'Спеціальні пропозиції:'}>
					<span>{offers}</span>
				</ListItem>

				<ListItem title={'Інструкції щодо реєстрації'}>
					<span>{instructions}</span>
				</ListItem>
			</ul>
		</Box>
	)
}