import Image from 'next/image'
import Link from 'next/link'
import Styles from '@/styles/Navbar.module.css'
import * as Images from '../img'
import * as Svg from '../svg'

export function Navbar() {
  return (
    <header className={Styles.mainHeader}>
      <nav className={Styles.navbarContainer}>
        <Link href="/">
          <Image src={Images.KazaLogoNoBg} alt="logo" width={90} height={50} />
        </Link>

        <input type="text" placeholder="Busque aqui" />

        <div className={Styles.navbarOptions}>
          <Link className={Styles.navbarOption} href="/auth/entrar">
            <Image src={Svg.UserLogo} alt="user-logo" width={24} height={24} />
            Entre ou <br /> Cadastre-se
          </Link>

          <Link href="#" className={Styles.navbarOption}>
            <Image src={Svg.CartLogo} alt="cart-logo" width={24} height={24} />
            Carrinho
          </Link>
        </div>

        <div className={Styles.mobileOptions}>
          <Link className={Styles.mobileOption} href="auth/entrar">
            <Image src={Svg.UserLogo} alt="user-logo" width={24} height={24} />
          </Link>

          <Link className={Styles.mobileOption} href="#">
            <Image src={Svg.CartLogo} alt="cart-logo" width={24} height={24} />
          </Link>
        </div>

        <div className={Styles.smallMobileMenu}>
          <Image src={Svg.BurgerMenu} alt="burger-menu" width={24} height={24} />
          <ul className={Styles.burgerMenuOptions}>
            <li>
              <Link href="/auth/entrar">
                <Image src={Svg.UserLogo} alt="user-logo" width={24} height={24} />
                Entrar ou <br /> cadastre-se
              </Link>
            </li>

            <li>
              <Link href="#">
                <Image src={Svg.CartLogo} alt="user-cart" width={24} height={24} />
                Carrinho
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
