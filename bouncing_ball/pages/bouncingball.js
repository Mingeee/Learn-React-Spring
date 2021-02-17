import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from '../styles/bouncingBall.module.css'

export default function bouncingBall() {
	const [ballAtBottom, setBallAtBottom] = useState(false);

	const ballPosition = useSpring({
		to: {
			y: 430
		},
		from: {
			y: 0
		},
		reverse: ballAtBottom,
		onRest: () => { setBallAtBottom(!ballAtBottom)},
		config: {
			duration: 3000
		}
	})

	return (
		<>
			<main>
				<div style={Style.floor}>
					<div style={Style.table}>
						<animated.div className={styles.ball} style={{ transform: ballPosition.y.interpolate(val => `translate(225px,${val}px)`) }}>
							A
						</animated.div>
					</div>
				</div>
			</main>
		</>
	)
}

const Style = {
	floor: {
		background: 'black',
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	table: {
		width: '500px',
		height: '500px',
		background: 'green',
		borderTop: 'brown 10px solid',
		borderBottom: 'brown 10px solid',
	}
}