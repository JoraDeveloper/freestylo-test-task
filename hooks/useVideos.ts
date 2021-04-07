import {useState, useEffect} from "react";

type UseVideosType = [
    videos: any[],
    openVideo: (event: any, url: string) => void,
    toggleFavorites: (item: any) => void,
]

const useVideos = <T>(v?: any[]): UseVideosType => {
    const [videos, setVideos] = useState<T[]>(v || []);

    useEffect(() => {
        const data: any[] = JSON.parse(localStorage.getItem('videos') || '[]');
        setVideos(data);
    }, [])

    const openVideo = (event: any, url: string) => {
        const {id} = event.target.dataset;
        if(!id && !event.target.closest('.video__favorite-wrap')) {
            window.open(url, '_blank');
        }
    }

    const toggleFavorites = (item: any) => {
        const videos: any[] = JSON.parse(localStorage.getItem('videos') || '[]');
        if (!videos) {
            localStorage.setItem('videos', JSON.stringify([item]));
            setVideos([item]);
            return;
        }

        if (videos.find(video => video._id === item._id)) {
            let newVideos = videos.filter(video => video._id !== item._id);
            localStorage.setItem('videos', JSON.stringify(
                newVideos
            ));
            setVideos(newVideos);
            return;
        }

        localStorage.setItem('videos', JSON.stringify([...videos, item]));
        setVideos([...videos, item]);
    }
    return [videos, openVideo, toggleFavorites];
}

export default useVideos;