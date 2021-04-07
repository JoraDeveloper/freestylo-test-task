import React from 'react';
import Image from "next/image";
import Link from "next/link";

type Props = {
    text: string,
    inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Header: React.FC<Props> = ({inputChangeHandler, clickHandler, text}) => {
    return (
        <div className='main__header header'>
            <form  className="header__form">
                <label htmlFor="header__input" className='header__label'>
                    Название канала
                </label>
                <input type="text" id='header__input' onChange={inputChangeHandler} value={text}/>
                <button type='button' className='header__button' onClick={clickHandler}>
                </button>
            </form>
            <Link href='/favorites'>
                <div className="header__favorites">
                    <Image
                        src='/star.svg'
                        height={30}
                        width={30}
                    />
                </div>
            </Link>
        </div>
    )
}

export default Header;