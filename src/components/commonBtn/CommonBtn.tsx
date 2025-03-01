import style from "./CommonBtn.module.scss";
import Image from "next/image";
import corner from "@/assets/images/corner.svg";
import {FC} from "react";


const CustomCorner: FC<{ className: string }> = ({className}) => {
    return (
        <svg className={`${className ? style[className] : ''}`} width="8" height="8" viewBox="0 0 8 8" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_933_128)">
                <mask id="path-1-inside-1_933_128" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 0H422V5H427V55H422V60H5V55H0V5H5V0Z"/>
                </mask>
                <path fillRule="evenodd" clipRule="evenodd" d="M5 0H422V5H427V55H422V60H5V55H0V5H5V0Z"
                      fill="#0098EA"/>
                <path
                    d="M422 0H425V-3H422V0ZM5 0V-3H2V0H5ZM422 5H419V8H422V5ZM427 5H430V2H427V5ZM427 55V58H430V55H427ZM422 55V52H419V55H422ZM422 60V63H425V60H422ZM5 60H2V63H5V60ZM5 55H8V52H5V55ZM0 55H-3V58H0V55ZM0 5V2H-3V5H0ZM5 5V8H8V5H5ZM422 -3H5V3H422V-3ZM425 5V0H419V5H425ZM427 2H422V8H427V2ZM430 55V5H424V55H430ZM422 58H427V52H422V58ZM425 60V55H419V60H425ZM5 63H422V57H5V63ZM2 55V60H8V55H2ZM0 58H5V52H0V58ZM-3 5V55H3V5H-3ZM5 2H0V8H5V2ZM2 0V5H8V0H2Z"
                    fill="#4DB7F0" mask="url(#path-1-inside-1_933_128)"/>
                <rect width="5" height="5" fill="#0C0F22"/>
            </g>
            <defs>
                <clipPath id="clip0_933_128">
                    <rect width="8" height="8" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}
export const CommonBtn: FC<{ title: string }> = ({title}) => {
    return (
        <div className={style.BtnWrapper}>
            <CustomCorner className={'CornerLeftTop'}/>
            <CustomCorner className={'CornerRightTop'}/>
            <button className={style.Btn}>{title}</button>
            <CustomCorner className={'CornerLeftBottom'}/>
            <CustomCorner className={'CornerRightBottom'}/>
        </div>
    )
}