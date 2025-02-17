import Image, {StaticImageData} from "next/image";
import style from './CommonImgWrapper.module.scss';
import blackSquare from '../../assets/images/blackSquare.svg';
import {FC} from "react";

export const CommonImgWrapper: FC<{ img: StaticImageData }> = ({img}) => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Corners}>

            </div>
            <Image src={img} alt={''} className={style.MainImg}/>
        </div>
    )
}