import style from "./CommonBtn.module.scss";
import Image from "next/image";
import corner from "@/assets/images/corner.svg";
import {FC} from "react";

export const CommonBtn: FC<{ title: string }> = ({title}) => {
    return (
        <div className={style.BtnWrapper}>
            <Image src={corner} alt={'portal'} className={style.CornerLeftTop}/>
            <Image src={corner} alt={'portal'} className={style.CornerRightTop}/>
            <button className={style.Btn}>{title}</button>
            <Image src={corner} alt={'portal'} className={style.CornerLeftBottom}/>
            <Image src={corner} alt={'portal'} className={style.CornerRightBottom}/>
        </div>
    )
}