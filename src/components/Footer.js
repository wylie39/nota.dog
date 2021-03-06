import React from 'react'

var style = {
	backgroundColor: '#00a9a5',
	borderTop: '1px solid #00a9a5',
	textAlign: 'center',
	left: '0',
	bottom: '0',
	height: '30px',
	width: '100%',
}

var heart = {
	color: '#e25555',
}

var phantom = {
	display: 'block',
	padding: '20px',
	height: '60px',
	width: '100%',
}

function Footer({ children }) {
	return (
		<div>
			<div style={phantom} />
			<div style={style}>
				Made with <span style={heart}>❤</span> in Maine
			</div>
		</div>
	)
}

export default Footer
