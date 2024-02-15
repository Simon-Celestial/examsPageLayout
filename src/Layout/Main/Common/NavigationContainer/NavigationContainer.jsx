import React, {useCallback, useContext} from 'react'
import styles from "./NavigationContainer.module.scss";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const NavigationContainer = () => {
    const {
        mobileMenuOpen,
        setMobileMenuOpen,
    } = useContext(LayoutContext);

    const handleOpenMenu = useCallback(() => {
        setMobileMenuOpen(true);

    }, [mobileMenuOpen,setMobileMenuOpen]);

    return (
        <>
            <div className={styles.navigationContainer}>
                <div className={styles.logoBlock}>
                    <a href="/">Logo</a>
                </div>
                <div className={styles.mobileMenuBtn}
                     onClick={handleOpenMenu}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className={styles.navigationBlock}>
                    <a href="">Haqqımızda</a>
                    <a href="">Kitablar</a>
                    <a href="">İmtahanlar</a>
                    <a href="">Bizimlə əlaqə</a>
                    <select name="languageSelection" id="languageSelection" className={styles.languageSelection}>
                        <option value="AZ" selected>AZ</option>
                        <option value="EN">EN</option>
                        <option value="RU">RU</option>
                        <option value="TR">TR</option>
                    </select>
                </div>
            </div>
        </>
    )
}
