import './style.css'

export default function Heading({ children, border }) {
	return (
		<div className={`heading ${border ? "heading--border" : ""}`}>
			{children}
		</div>
	)
}