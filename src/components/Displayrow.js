import React from 'react'

const Displayrow = (props) => {

    const style = {
        height: '15vh',
        outline: 'none',
        border: 'none',
        fontSize:'40px',
        background:' #FFFF66'
    }

    return (
        <div className="display-row">
            <input style={style} type="text" readOnly value={props.value} className='w-100 text-end' />
        </div>
    )
}

export default Displayrow;
