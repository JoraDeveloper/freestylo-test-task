import React, {useState} from 'react';
import Header from '../components/Header';
import Video from "./Video";
import Loader from "./Loader";
import useVideos from "../hooks/useVideos";

type Props = {
    axiosInstance: any
}

const MainContainer: React.FC<Props> = ({axiosInstance}) => {

    const [videos, setVideos] = useState<any>([]);
    const [input, setInput] = useState<string>('');
    const [fetching, setFetching] = useState<boolean>(false);
    const [favoriteVideos,openVideo, toggleFavorites] = useVideos()


    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value: text}} = event;
        setInput(text);
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setFetching(true);
        const fetching = async () => {
            try {
                const users: any = await axiosInstance.get(`https://api.twitch.tv/kraken/users?login=${input}`);
                const [user] = users.data.users;
                if (!user) {
                    setFetching(false);
                    setVideos([]);
                }
                const data = await axiosInstance.get(`https://api.twitch.tv/kraken/channels/${user._id}/videos`);
                setVideos(data.data.videos);
                setFetching(false);
            } catch (e) {
                console.log(e);
                setFetching(false);
            }
        }
        fetching();
    }

    const renderVideos = () => {
        return videos.map((video: any, index: number) => {
            let favorite = false;
            if(favoriteVideos.find(favoriteVideo => favoriteVideo._id === video._id)) {
                favorite = true;
            }
            return (
                <Video
                    key={video.title + index}
                    item={video}
                    openVideo={openVideo}
                    toggleFavorites={toggleFavorites}
                    favorite={favorite}
                />
            )
        })
    }

    return (
        <div className='app__main main'>
            <div className="main__container">
                <Header
                    inputChangeHandler={inputChangeHandler}
                    clickHandler={clickHandler}
                    text={input}
                />
                <div className='main__videos videos'>
                    {fetching && <Loader />}
                    {(!videos.length && !fetching) && <p className='videos__placeholder'>Похоже ничего нет...</p>}
                    {
                        renderVideos()
                    }
                </div>
            </div>
        </div>
    )
}

export default MainContainer;
