import React, { useEffect } from 'react'
import { useState } from 'react'


function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/shrigawande2002')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])
    return (
        <>

            <div className=' text-center text-3xl bg-gray-400 p-4'> <h1 className='relative left-[8rem] top-[]'> Github followes : {data.followers}</h1>
                <img src={data.avatar_url} alt=" git picture " /> </div>
        </>
    )
}

export default Github
