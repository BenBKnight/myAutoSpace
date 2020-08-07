import React from 'react'

function ImageUpload(props) {
    return (
        <>
            <form >
                <input type="file" onChange={props.onFileChange} />
            </form>
        </>
    )
}

export default ImageUpload;