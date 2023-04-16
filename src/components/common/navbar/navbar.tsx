import Image from 'next/image'
import Link from 'next/link'
import Styles from '@/styles/Navbar.module.css'
import * as Img from './imgs'
import * as Svg from './svgs'

export function Navbar() {
  return (
    <header className={Styles.mainHeader}>
      <nav className={Styles.navbarContainer}>
        <Link href="/">
          <Image src={Img.KazaLogo} alt="logo" width={90} height={50} />
        </Link>

        <input type="text" placeholder="Busque aqui" />

        <div className={Styles.navbarOptions}>
          <Link className={Styles.navbarOption} href="/auth/entrar">
            <Svg.User />
            Entre ou <br /> Cadastre-se
          </Link>

          <Link href="#" className={Styles.navbarOption}>
            <Svg.Cart />
            Carrinho
          </Link>
        </div>

        <div className={Styles.mobileOptions}>
          <Link className={Styles.mobileOption} href="auth/entrar">
            <Svg.User />
          </Link>

          <Link className={Styles.mobileOption} href="#">
            <Svg.Cart />
          </Link>
        </div>

        <div className={Styles.smallMobileMenu}>
          <Svg.BurgerMenu />
          <ul className={Styles.burgerMenuOptions}>
            <li>
              <Link href="/auth/entrar">
                <Svg.User />
                Entrar ou <br /> cadastre-se
              </Link>
            </li>

            <li>
              <Link href="#">
                <Svg.Cart />
                Carrinho
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
