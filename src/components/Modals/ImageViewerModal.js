import React from 'react';
import ImageViewer from '../ImageViewer';

const ImageViewerModal = (props) => {
    return (
        <React.Fragment>
            <div
                className={
                    props.isOpen
                        ? 'opacity-1 fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-[#000] flex flex-col justify-center items-center transition-opacity duration-1000'
                        : 'opacity-0 fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-[#000] flex flex-col justify-center items-center transition-opacity duration-200 -z-10'
                }
            >
                <div className='w-2/5 flex flex-col'>
                    <svg
                        className='w-6 h-6 fill-[#f7f8fd] self-end cursor-pointer mb-2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 18 18'
                        onClick={() => props.setIsOpen()}
                    >
                        <path d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z' />
                    </svg>
                    <div>
                        <ImageViewer images={props.images} thumbnails={props.thumbnails} />
                        <div></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ImageViewerModal;
