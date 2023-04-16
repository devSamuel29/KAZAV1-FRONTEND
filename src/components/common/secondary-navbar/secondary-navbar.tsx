import Link from 'next/link'
import * as Svg from './svgs'
import Styles from '~/styles/SecondaryNavbar.module.css'

export function SecondaryNavbar() {
  return (
    <header className={Styles.secondaryHeader}>
      <nav className={Styles.secondaryNavbar}>
        <ul className={Styles.secondaryNavbarItems}>
          <li className={Styles.secondaryNavbarDropdownItem}>
            Acessórios de Banheiro
            <Svg.ArrowDown />
            <ul className={Styles.secondaryNavbarDropdownContent}>
              <li>
                <Link href="#!">Bandejas</Link>
              </li>

              <li>
                <Link href="#!">Difusores</Link>
              </li>
              <li>
                <Link href="#!">Lixeiras</Link>
              </li>

              <li>
                <Link href="#!">Organizadores</Link>
              </li>

              <li>
                <Link href="#!">Porta Utensílios</Link>
              </li>

              <li>
                <Link href="#!">Potes</Link>
              </li>

              <li>
                <Link href="#!">Saboneteiras Líquidas</Link>
              </li>
            </ul>
          </li>
          <Link href="/contato">
            <li className={Styles.secondaryNavbarItem}>Contato</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
