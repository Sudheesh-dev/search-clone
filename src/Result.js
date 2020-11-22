import React from 'react'
import "./Result.css"

function Result({ data }) {
    return (
        <div className="result">
            {data?.items?.map((item) => {
                return (
                    <div className='resultElement' >
                        <a className='resultTitle' href={item.link}>
                            <p className='resultLink'>{item.displayLink}</p>
                            <h2 className='resultHeader'>{item.title}</h2>
                        </a>
                        <p className='resultDescription'>{item.snippet}</p>

                    </div>
                )
            })}
        </div>
    )
}

export default Result
