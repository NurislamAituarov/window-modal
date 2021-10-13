import { useRef, useEffect, useState } from 'react'
import './item.css'
const Item = () => {
    const focus = useRef();
    const [text, setText] = useState('');
    const [num, setNum] = useState('');

    useEffect(() => {
        // console.log(focus);
        focus.current.focus()
    }, [])
    function onSubmit(e) {
        e.preventDefault();
        const result = new FormData(e.target)
        const object = {}
        result.forEach((el, i) => object[i] = el)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(object)
        })
            .then(data => data.json())
            .then(obj => console.log(obj))
        
        setText('');
        setNum('');
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <input onChange={(e)=>setText(e.target.value)} ref={focus} name="text" type="text" placeholder="text" value={text}/>
            <input onChange={(e)=>setNum(e.target.value)} type="text" name="number" placeholder="number" value={num}/>
            <button type="submit">click me</button>
        </form>
    )
}
export default Item;
