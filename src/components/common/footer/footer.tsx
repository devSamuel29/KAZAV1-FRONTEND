import Image from 'next/image'
import Link from 'next/link'
import * as Img from './imgs'
import * as Svg from './svgs'
import Styles from '~/styles/Footer.module.css'

export function Footer() {
  return (
    <footer className={Styles.mainFooter}>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerContacts}>
          <Image src={Img.LogoNoBg} alt="logo" width={90} height={50} />
          <p>
            É o lugar ideal para quem busca transformar sua casa em um verdadeiro lar,
            repleto de personalidade e estilo. Com um mix de produtos variados sempre com
            muita qualidade e bom gosto.
          </p>

          <div className={Styles.footerSocialMedia}>
            <Link
              href="https://www.in./stagram.com/kazariobranco/"
              className={Styles.footerLink}
              id="instagram"
            >
              <Svg.Instagram />
            </Link>

            <Link
              href="https://www.facebook.com/kazariobranco"
              className={Styles.footerLink}
              id="facebook"
            >
              <Svg.Facebook />
            </Link>

            <Link
              href="https://wa.me/5585999939645"
              className={Styles.footerLink}
              id="whatsapp"
            >
              <Svg.Whatsapp />
            </Link>
          </div>
        </div>

        <ul className={Styles.footerList}>
          <li>
            <h3>Blog</h3>
          </li>
          <li>
            <a href="#" className={Styles.footerLink}>
              Tech
            </a>
          </li>
          <li>
            <a href="#" className={Styles.footerLink}>
              Adventures
            </a>
          </li>
          <li>
            <a href="#" className={Styles.footerLink}>
              Music
            </a>
          </li>
        </ul>

        <ul className={Styles.footerList}>
          <li>
            <h3>Products</h3>
          </li>
          <li>
            <Link href="#" className={Styles.footerLink}>
              App
            </Link>
          </li>
          <li>
            <Link href="#" className={Styles.footerLink}>
              Desktop
            </Link>
          </li>
          <li>
            <Link href="#" className={Styles.footerLink}>
              Cloud
            </Link>
          </li>
        </ul>
      </div>

      <div className={Styles.footerCopyright}>&copy; KAZARIOBRANCO 2023</div>
    </footer>
  )
}
