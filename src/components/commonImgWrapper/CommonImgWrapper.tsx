import Image, {StaticImageData} from "next/image";
import style from './CommonImgWrapper.module.scss';
import blackSquare from '../../assets/images/blackSquare.svg';
import {FC} from "react";

export const CommonImgWrapper: FC<{ img: StaticImageData }> = ({img}) => {
    return (
        <div className={style.Wrapper}>
            <Image src={blackSquare} alt={'portal'} className={style.CornerLeftTop}/>
            <Image src={blackSquare} alt={'portal'} className={style.CornerRightTop}/>
            <Image src={img} alt={''} className={style.MainImg}/>
            <Image src={blackSquare} alt={'portal'} className={style.CornerLeftBottom}/>
            <Image src={blackSquare} alt={'portal'} className={style.CornerRightBottom}/>
        </div>
    )
}