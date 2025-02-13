'use client'
import style from './RoadMap.module.scss';
import './slider.scss';
import Image from "next/image";
import Slider from "react-slick";
import dot from '../../assets/images/dot.svg'

export const RoadMap = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive:[{
            breakpoint:760,
            settings:{
                slidesToShow: 1,
                // variableWidth: false,
                // centerMode: true,
            }
        }],
    };
    const roadMapInfo = [
        {
            id: 1,
            title: 'Closed beta (Q4 2024)',
            subTitle: 'Stage 1',
            img: require('../../assets/images/chestRoadMap.png'),
            list: [
                {value: 'Get rewards in TON and LTR tokens from chests in Lootster game', id: 1},
                {value: 'Leaderboards for LTR and TON tokens: Daily, weekly and monthly', id: 2},
                {value: 'Referral system', id: 3},
                {value: 'Daily and Basic quests', id: 4},
                {value: 'NFT Achievements for group quests', id: 5},
            ]
        },
        {
            id: 2,
            title: 'Release (Q1 2025)',
            subTitle: 'Stage 2',
            img: require('../../assets/images/roadMap.png'),
            list: [
                {value: 'World Map', id: 1},
                {value: 'Free NFT closed beta airdrop', id: 2},
                {value: '"Bomb It Up" PvP game release', id: 3},
                {value: 'New UI system with world map', id: 4},
                {value: 'Token Generation Event (TGE)', id: 5},
                {value: 'Token swap', id: 6},
            ]
        },
        {
            id: 3,
            title: 'Update (Q2 2025)',
            subTitle: 'Stage 3',
            img: require('../../assets/images/gnome.png'),
            list: [
                {value: 'Crack the Egg game release', id: 1},
                {value: 'In-game token swap', id: 2},
                {value: 'NFT boosters for Lootster game', id: 3},
                {value: 'More Languages support', id: 4},
                {value: 'CEX listing', id: 5},
                {value: 'Open game data', id: 6},
                {value: 'Airdrop for various NFT holders', id: 7},
            ]
        },
    ]

    return (
        <div className={style.Wrapper} id={'Roadmap'}>
            <div className={style.Container}>
                <h2 className={style.Title}>Roadmap</h2>
                <div className={style.SliderWrapper}>
                    <Slider {...settings} className={style.Slider}>
                        {
                            roadMapInfo.map(item => {
                                return (
                                    <div className={style.SliderItem} key={item.id}>
                                        <Image src={item.img} alt={''} className={style.Img}/>
                                        <p className={style.SubTitle}>{item.subTitle}</p>
                                        <h3 className={style.Title}>{item.title}</h3>
                                        <ul className={style.List}>
                                            {
                                                item.list.map(list => {
                                                    return (
                                                        <li key={list.id} className={style.ListItem}>
                                                            <Image src={dot} alt={''} className={style.Dot}/>
                                                            {list.value}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}