import React from 'react';
import Link from 'next/link'
import Video from "./Video";
import useVideos from "../hooks/useVideos";

const FavoritesContainer = () => {

    const [videos, openVideo, toggleFavorites] = useVideos<any>();

    return (
        <div className='app_favorites favorites'>
            <Link href='/'>
                <button type='button' className='favorites__btn'>
                    На главную
                </button>
            </Link>
            <div className='favorites__videos videos'>
                {!videos.length && <p className='videos__placeholder'>Эта страница пуста</p>}
                {
                    videos.map((video, index) => (
                        <Video
                            item={video}
                            key={video.title + index}
                            favorite={true}
                            openVideo={openVideo}
                            toggleFavorites={toggleFavorites}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FavoritesContainer;