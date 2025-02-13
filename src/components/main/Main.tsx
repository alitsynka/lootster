import style from './Main.module.scss';
import Image from "next/image";
import portal from '../../assets/images/portal.png'
import {Link} from 'react-scroll';
import {CommonBtn} from "@/components/commonBtn/CommonBtn";

export const Main = () => {


    return (
        <div className={style.Wrapper} id={'Main'}>
            <div className={style.Container}>
                <section className={style.SectionDesc}>
                    <h1 className={style.Title}>Welcome to Lootster</h1>
                    <p className={style.Desc}>Lootster is a free play-to-earn lootbox lottery game on the TON
                        blockchain, where players can
                        earn
                        TON and LTR tokens. Starting as a fair game, it will grow into a transparent gaming ecosystem as
                        outlined in our roadmap.</p>
                    <CommonBtn title={'Invite 100/100'}/>
                </section>
                <section className={style.SectionImg}>
                    <Image src={portal} alt={'portal'}/>
                </section>
            </div>
        </div>
    )
}