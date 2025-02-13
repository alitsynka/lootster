'use client'
import style from "./Header.module.scss";
import './MobileBurger.scss';
import {Link} from "react-scroll";
import {FC, useState} from "react";
import {slide as Menu} from "react-burger-menu";
import Image from "next/image";
import burger from '../../assets/images/burger.svg';
import cross from '../../assets/images/burger.svg';

const CustomBurgerIcon: FC<{ isOpenMenu: boolean }> = ({isOpenMenu}) => {
    return (
        <Image src={isOpenMenu ? cross : burger} alt={''} className={'Icon'}/>
    )
}

export const Header = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <Link to="Main" spy={true} offset={-100} smooth={true} duration={800}
                      className={style.Title}>Lootster</Link>
                <nav className={`${style.Nav}`}>
                    <ListOfNavigation/>
                </nav>
                {/*<button className={`${style.BurgerBtn} ${isOpenMenu ? style.BurgerBtnVisible : ''}`}*/}
                {/*        onClick={toggleMenu}></button>*/}
                <div className={style.MenuMobileWrapper}>
                    <Menu isOpen={isOpenMenu}
                          onOpen={toggleMenu}
                          onClose={toggleMenu}
                          className={style.MobileMenu}
                          right
                          customBurgerIcon={<CustomBurgerIcon isOpenMenu={isOpenMenu}/>}
                    >
                        <ListOfNavigation toggleMenu={toggleMenu}/>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
type ListOfNavigationType = {
    toggleMenu?: () => void
}
const ListOfNavigation: FC<ListOfNavigationType> = ({toggleMenu}) => {


    return (
        <ul>
            <li onClick={toggleMenu}>
                <Link to="Features" spy={true} offset={-100} smooth={true} duration={800} className={style.NavLink}
                      activeClass={style.ActiveNavLink}>Features</Link>
            </li>
            <li onClick={toggleMenu}>
                <Link to="Games" spy={true} hashSpy={true} offset={-100} smooth={true} duration={800}
                      className={style.NavLink} activeClass={style.ActiveNavLink}>Games</Link>
            </li>
            <li onClick={toggleMenu}>
                <Link to="Tokenomics" spy={true} hashSpy={true} offset={-50} smooth={true} duration={800}
                      className={style.NavLink} activeClass={style.ActiveNavLink}>Tokenomics</Link>
            </li>
            <li onClick={toggleMenu}>
                <Link to="Roadmap" spy={true} hashSpy={true} offset={-50} smooth={true} duration={800}
                      className={style.NavLink} activeClass={style.ActiveNavLink}>Roadmap</Link>
            </li>
            <li onClick={toggleMenu}>
                <Link to="Docs" spy={true} hashSpy={true} offset={-50} smooth={true} duration={800}
                      className={style.NavLink} activeClass={style.ActiveNavLink}>Docs</Link>
            </li>
        </ul>
    )
}
