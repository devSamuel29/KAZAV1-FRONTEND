import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/img/logo_nobg.png'
import UserLogo from '../../public/svg/user-logo.svg'
import CartLogo from '../../public/svg/cart-logo.svg'
import BurgerMenu from '../../public/svg/burger-menu.svg'
import Styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <header className={Styles.mainHeader}>
            <nav className={Styles.navbarContainer}>
                <Link href="/"><Image src={Logo.src} alt="logo" width={90} height={50} /></Link>

                <input type="text" placeholder="Busque aqui" />

                <div className={Styles.navbarOptions}>
                    <Link className={Styles.navbarOption} href="/auth/entrar">
                        <Image src={UserLogo.src} alt='user-logo' width={24} height={24} />
                        Entre ou <br /> Cadastre-se
                    </Link>

                    <Link href="#" className={Styles.navbarOption}>
                        <Image src={CartLogo.src} alt='cart-logo' width={24} height={24} />
                        Carrinho
                    </Link>
                </div>

                <div className={Styles.mobileOptions}>
                    <Link className={Styles.mobileOption} href="auth/entrar">
                        <Image src={UserLogo.src} alt='user-logo' width={24} height={24} />
                    </Link>

                    <Link className={Styles.mobileOption} href="#">
                        <Image src={CartLogo.src} alt='cart-logo' width={24} height={24} />
                    </Link>
                </div>

                <div className={Styles.smallMobileMenu}>
                    <Image src={BurgerMenu.src} alt='burger-menu' width={24} height={24}/>

                    <div>
                        <ul className="burgerMenuOptions">
                            <li>
                                <Link href="#">
                                    <Image src={UserLogo.src} alt='user-logo' width={24} height={24} />
                                    Entrar ou <br /> cadastre-se
                                </Link>
                            </li>

                            <li>
                                <Link href="auth/entrar">
                                    <Image src={CartLogo.src} alt='user-cart' width={24} height={24} />
                                    Carrinho
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}