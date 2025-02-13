'use client'
import style from './Docs.module.scss';
import Image from "next/image";
import gnoms from '../../assets/images/docs.png'
import {CommonBtn} from "@/components/commonBtn/CommonBtn";


export const Docs = () => {
    return (
        <div className={style.Wrapper} id={'Docs'}>
            <div className={style.Container}>
                <div className={style.DescBlock}>
                    <h2 className={style.Title}>Docs</h2>
                    <p className={style.Desc}>Discover the two tokens powering the Lootster ecosystem on the TON
                        blockchain: LTR and TON.</p>
                    <CommonBtn title={'Watch documentation'}/>
                </div>
                <Image src={gnoms} alt={''} className={style.Gnoms}/>
            </div>
        </div>
    )
}