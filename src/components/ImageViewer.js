import React from 'react';

const ImageViewer = (props) => {
    console.log(props.images);

    const firstImage = props.images.full[0];

    console.log(firstImage);

    return (
        <div>
            <img src={firstImage} alt='product' />
        </div>
    );
};

export default ImageViewer;
