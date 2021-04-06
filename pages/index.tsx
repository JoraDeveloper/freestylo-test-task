import MainContainer from "../components/MainContainer";
import Head from "next/head";

const  App = () => {
    return (
        <>
            <Head>
                <title>freestylo-test-task</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <div className='app'>
                <MainContainer />
            </div>
        </>
    )
}

export default App;