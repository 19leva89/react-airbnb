import logo from './logo.svg'
import './style.css'

export default function Header() {
	return (
		<header className="header">
			<img src={logo} alt="Logo" height={32} />
		</header>
	)
}