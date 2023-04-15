import Link from "next/link";
import Image from "next/image";

import Styles from "@/styles/Footer.module.css";
import * as Svg from "../svg";
import * as Images from "../img";

const Footer = () => {
  return (
    <footer className={Styles.mainFooter}>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerContacts}>
          <Image src={Images.KazaLogoNoBg} alt="logo" width={90} height={50} />
          <p>
            É o lugar ideal para quem busca transformar sua casa em um
            verdadeiro lar, repleto de personalidade e estilo. Com um mix de
            produtos variados sempre com muita qualidade e bom gosto.
          </p>

          <div className={Styles.footerSocialMedia}>
            <Link href="https://www.in./stagram.com/kazariobranco/" className={Styles.footerLink} id="instagram">
              <Image src={Svg.IconInstagram} alt="instagram-icon" width={24} height={24} />
            </Link>

            <Link href="https://www.facebook.com/kazariobranco" className={Styles.footerLink} id="facebook" >
              <Image src={Svg.IconFacebook} alt="facebook-icon" width={24} height={24} />
            </Link>

            <Link href="https://wa.me/5585999939645" className={Styles.footerLink}
              id="whatsapp">
              <Image src={Svg.IconWhatapp} alt="whatsapp-icon" width={24} height={24} />
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
  );
};

export default Footer;
