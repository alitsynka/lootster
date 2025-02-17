'use client'
import style from './Tokenomics.module.scss';
import Image from "next/image";
import blackSquare from "@/assets/images/blackSquare.svg";
import {FC} from "react";

const TokenomicsData = [
    {bgColor: 'rgba(103, 103, 211, 1)', title: '50% Cheast reward', id: 1},
    {bgColor: 'rgba(124, 136, 83, 1)', title: '25% Core contributors', id: 2},
    {bgColor: 'rgba(127, 207, 250, 1)', title: '10% Providing liquidity', id: 3},
    {bgColor: 'rgba(182, 123, 97, 1)', title: '10% Airdrop for NFT holders ', id: 4},
    {bgColor: 'rgba(65, 52, 102, 1)', title: '5% Early supportest', id: 5},
]

export const Tokenomics = () => {
    return (
        <div className={style.Wrapper} id={'Tokenomics'}>
            <div className={style.Container}>
                <h2 className={style.Title}>Tokenomics</h2>
                <div className={style.ContainerOfSections}>
                    <section className={style.DescSection}>
                        <div className={style.TitleBlock}>
                            <h3 className={style.Title}>TON</h3>
                            <p className={style.Desc}>An exclusive reward token, obtainable only by opening chests.</p>
                        </div>
                        <div className={style.TitleBlock}>
                            <h3 className={style.Title}>LTR</h3>
                            <p className={style.Desc}>A utility token used for rewards, gameplay, and liquidity.</p>
                        </div>
                    </section>
                    <section className={style.DiagramSection}>
                        <div className={style.ImageContainer}>
                        </div>
                        <div className={style.DisagramDescBlock}>
                            {
                                TokenomicsData.map((item) => {
                                        return (
                                            <TokenomicsSection title={item.title} key={item.id} bgColor={item.bgColor}/>
                                        )
                                    }
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
const TokenomicsSection: FC<{ bgColor: string, title: string }> = ({bgColor, title}) => {
    return (
        <div className={style.LtrContent1} style={{'background': `${bgColor}`}}>
            <Image src={blackSquare} alt={''} className={style.CornerLeftTop}/>
            <Image src={blackSquare} alt={''} className={style.CornerRightTop}/>
            <p>{title}</p>
            <Image src={blackSquare} alt={''} className={style.CornerLeftBottom}/>
            <Image src={blackSquare} alt={''} className={style.CornerRightBottom}/>
        </div>
    )
}