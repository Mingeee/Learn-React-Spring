
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default function pullandput() {
    const initialXY = { x: 0, y: 0 }
    const [XY, setXY] = useState(initialXY)

    return (
        <>
            <main>
                <div style={Style.floor}>
                    <div style={Style.table}>
                        <animated.div style={{ background: 'skyblue', width: 50, height: 50, borderRadius: 50 }}>

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