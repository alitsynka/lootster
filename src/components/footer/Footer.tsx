'use client'
import style from './Footer.module.scss';
import Image from "next/image";
import {Link} from 'react-scroll';
import {Features} from "@/components/features/Features";

export const Footer = () => {
    return (
        <footer className={style.Wrapper}>
            <div className={style.Container}>
                <h2 className={style.Title}>Lootster</h2>
                <ul className={style.List}>
                    <li>
                        <Link to="Features" spy={true} offset={-100} smooth={true} duration={800}
                              className={style.NavLink} activeClass={style.ActiveNavLink}>Features</Link>
                    </li>
                    <li>
                        <Link to="Games" spy={true} hashSpy={true} offset={-100} smooth={true} duration={800}
                              className={style.NavLink} activeClass={style.ActiveNavLink}>Games</Link>
                    </li>
                    <li>
                        <Link to="Tokenomics" spy={true} hashSpy={true} offset={-50} smooth={true} duration={800}
                              className={style.NavLink} activeClass={style.ActiveNavLink}>Tokenomics</Link>
                    </li>
                    <li>
                        <Link to="Roadmap" spy={true} hashSpy={true} offset={-50} smooth={true} duration={800}
                              className={style.NavLink} activeClass={style.ActiveNavLink}>Roadmap</Link>
                    </li>
                    <li>
                        <Link to="Docs" spy={true} hashSpy={true} offset={-50} smooth={true} duration={800}
                              className={style.NavLink} activeClass={style.ActiveNavLink}>Docs</Link>
                    </li>
                </ul>
                <ul className={style.List}>
                    <li>
                        <a href={'#'}>Telegram</a>
                    </li>
                    <li>
                        <a href={'#'}>Twitter</a>
                    </li>
                    <li>
                        <a href={'#'}>Discord</a>
                    </li>
                </ul>
                <div className={style.EmailBlock}>
                    <p>For proposals & partnerships</p>
                    <a href="#" className={style.Email}>hello@lootster.fun</a>
                </div>
            </div>
        </footer>
    )
}