'use client'
import style from './Features.module.scss';
import Image from "next/image";
import book from '../../assets/images/book.png';

export const Features = () => {
    return (
        <div className={style.Wrapper} id={'Features'}>
            <div className={style.Container}>
                <h2 className={style.Title}>Features</h2>
                <div className={style.CardWrapper}>
                    <div className={style.CardSection}>
                        {/*<Image src={book} alt={''}/>*/}
                        <p>Fair Play via smart contracts</p>
                    </div>
                    <div className={style.CardSection}>
                        {/*<Image src={book} alt={''}/>*/}
                        <p>Transparency on the TON blockchain</p>
                    </div>
                    <div className={style.CardSection}>
                        {/*<Image src={book} alt={''}/>*/}
                        <p>Real rewards with market value tokens</p>
                    </div>
                    <div className={style.CardSection}>
                        {/*<Image src={book} alt={''}/>*/}
                        <p>Ease of Use with TON wallet integration</p>
                    </div>
                </div>
            </div>
        </div>
    )
}