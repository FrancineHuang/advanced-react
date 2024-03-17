import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const onCount = () => setCount(count + 1)
    return (
        <button
            className='btn'
            onClick={onCount}
            style={{ marginBottom: '1rem' }}
        >
            count { count }
        </button>
    )
}

export default Counter