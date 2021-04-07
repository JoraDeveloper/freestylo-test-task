import React from 'react';

type Props = {
    item: any,
    openVideo: (event: any, url: string) => void,
    toggleFavorites: (item: any) => void,
    favorite?: boolean
}


const Video: React.FC<Props> = ({item, favorite, openVideo, toggleFavorites}) => {

    const {title, preview, url}  = item;
    const {large: img} = preview;

    return (
        <a
            className={`videos__video video ${favorite ? 'selected' : ''}`}
            onClick={(e:React.MouseEvent<HTMLAnchorElement>) => openVideo(e, url)}

        >
            <img src={img} alt={title}/>
            <div className="video__backdrop"></div>
            <p className="video__text">
                {title}
            </p>
            <div className='favorite'>
                <div className='video__favorite-wrap' data-id='favorite'>
                    <div className="video__favorite-border">
                        <div
                            className="video__favorite"
                            onClick={() => toggleFavorites(item)}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Video;