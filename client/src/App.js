import React, {useState, useEffect} from 'react'
import "./stylesheet.css";

function App() {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/home").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div className='banner'>
            <h1 className='welcome-text'>Welcome to the web portal!</h1>
            <div className='links-ribbon'>
                {(typeof data.links === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                    data.buttons.labels.map((labels, i) => (
                        // <button href={data.buttons.urls} key={i}>{labels}</button>
                        <p key={i}>{labels}</p>
                    ))
                )}
            </div>
        </div>
    )
}

export default App
