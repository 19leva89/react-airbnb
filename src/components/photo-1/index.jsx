import './style.css'

export default function Photo({ src, name }) {
	return (
		<img src={src} alt={name} className="photo" />
	)
}