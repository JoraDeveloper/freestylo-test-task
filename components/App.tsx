import Head from "next/head";
import React, {useEffect} from "react";


type Props = {
    axiosInstance: any
}
const  App: React.FC<Props> = ({children, axiosInstance}) => {

    useEffect(() => {
        axiosInstance.defaults.headers['Client-ID'] = 'ku0q19f8kefr5zpabtw076oyx4kyb6';
        axiosInstance.defaults.headers['Accept'] = 'application/vnd.twitchtv.v5+json';
    }, [])

    return (
        <>
            <Head>
                <title>freestylo-test-task</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <div className='app'>
                {children}
            </div>
        </>
    )
}

export default App;