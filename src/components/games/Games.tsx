'use client'
import style from './Games.module.scss';
import Image from "next/image";
import game1 from '../../assets/images/game1.png';
import game2 from '../../assets/images/game2.png';
import game3 from '../../assets/images/game3.png';
import {CommonImgWrapper} from "@/components/commonImgWrapper/CommonImgWrapper";

export const Games = () => {
    return (
        <div className={style.Wrapper} id={'Games'}>
            <div className={style.Container}>
                <h2 className={style.Title}>Games</h2>
                <div className={style.ContainerOfSections}>
                    <div className={style.ImageBlock1}>
                        <CommonImgWrapper img={game1}/>
                    </div>
                    <div className={style.ImageBlock2}>
                        <CommonImgWrapper img={game2}/>
                    </div>
                    <div className={style.ImageBlock3}>
                        <CommonImgWrapper img={game3}/>
                    </div>
                </div>
            </div>
        </div>
    )
}