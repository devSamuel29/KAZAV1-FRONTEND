import Image from 'next/image'
import Link from 'next/link'
import Styles from '@/styles/SecondaryNavbar.module.css'
import * as Svg from '../svg'

export function SecondaryNavbar() {
  return (
    <header className={Styles.secondaryHeader}>
      <nav className={Styles.secondaryNavbar}>
        <ul className={Styles.secondaryNavbarItems}>
          <li className={Styles.secondaryNavbarDropdownItem}>
            Acessórios de Banheiro
            <Image src={Svg.ArrowDown} alt="arrow-down" width={12} height={8} />
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

export default SecondaryNavbar
