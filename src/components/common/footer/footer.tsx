import Image from 'next/image'
import Link from 'next/link'
import * as Img from './imgs'
import * as Svg from './svgs'

function navigateToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

type ListItemLinkProps = {
  href: string
  children: React.ReactNode
}

function ListItemLink({ href, children }: ListItemLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:underline">
        {children}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#ecebeb] shadow-[0_-1px_0] shadow-[#dfdfdf]">
      <div className="m-auto flex w-full max-w-[1280px] justify-between px-10 py-12">
        <div className="flex max-w-[400px] flex-col gap-6">
          <button aria-label="Navegar para o topo" onClick={navigateToTop}>
            <Image src={Img.LogoNoBg} alt="logo" />
          </button>

          <p>
            Transforme sua casa em um lar com personalidade e estilo. Produtos variados de
            qualidade e bom gosto.
          </p>

          <div className="flex gap-4">
            <Link
              aria-label="Instagram"
              href="https://www.in./stagram.com/kazariobranco/"
              className="transition hover:text-primary"
            >
              <Svg.Instagram />
            </Link>

            <Link
              aria-label="Facebook"
              href="https://www.facebook.com/kazariobranco"
              className="transition hover:text-primary"
            >
              <Svg.Facebook />
            </Link>

            <Link
              aria-label="Whatsapp"
              href="https://wa.me/5585999939645"
              className="transition hover:text-primary"
            >
              <Svg.Whatsapp />
            </Link>
          </div>
        </div>

        <div className="flex gap-32">
          <div>
            <h3 className="mb-4 font-medium">Blog</h3>
            <ul className="flex flex-col gap-3">
              <ListItemLink href="#">Tech</ListItemLink>
              <ListItemLink href="#">Adventures</ListItemLink>
              <ListItemLink href="#">Music</ListItemLink>
              <ListItemLink href="#">Music</ListItemLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Blog</h3>
            <ul className="flex flex-col gap-3">
              <ListItemLink href="#">Tech</ListItemLink>
              <ListItemLink href="#">Adventures</ListItemLink>
              <ListItemLink href="#">Music</ListItemLink>
              <ListItemLink href="#">Music</ListItemLink>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium">Products</h3>
            <ul className="flex flex-col gap-3">
              <ListItemLink href="#">Tech</ListItemLink>
              <ListItemLink href="#">Adventures</ListItemLink>
              <ListItemLink href="#">Music</ListItemLink>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(0,0,0,0.05)] bg-[rgba(0,0,0,0.025)] py-4 text-center text-sm font-medium tracking-wide text-[rgba(0,0,0,0.8)]">
        &copy; KAZARIOBRANCO 2023
      </div>
    </footer>
  )
}
