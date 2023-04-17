import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useThrottle } from '~/hooks'
import * as Img from './img'
import * as Svg from './svg'

type ListItemLinkProps = {
  href: string
  children: React.ReactNode
}

function ListItemLink({ href, children }: ListItemLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="group/item flex w-fit items-center gap-1.5 decoration-primary underline-offset-4 hover:underline"
      >
        {children}
        <Svg.ArrowRight className="invisible origin-left scale-0 text-primary opacity-0 transition duration-300 group-hover/item:visible group-hover/item:scale-100 group-hover/item:opacity-100" />
      </Link>
    </li>
  )
}

type NavbarListItemProps = {
  children: React.ReactNode
}

function NavbarListItem({ children }: NavbarListItemProps) {
  return (
    <div className="group relative z-10 flex flex-col items-center">
      <button className="h-full py-1">{children}</button>
      <div className="h-0.5 w-full rounded-full bg-transparent group-hover:bg-primary" />
      <ul className="invisible absolute bottom-0 flex translate-y-full flex-col gap-4 whitespace-nowrap rounded-lg bg-[#F9F9F9] px-6 py-6 opacity-0 shadow-md transition duration-300 group-hover:visible group-hover:opacity-100">
        <ListItemLink href="#">Bandejas</ListItemLink>
        <ListItemLink href="#">Difusores</ListItemLink>
        <ListItemLink href="#">Lixeiras</ListItemLink>
        <ListItemLink href="#">Organizadores</ListItemLink>
        <ListItemLink href="#">Porta Utensílios</ListItemLink>
        <ListItemLink href="#">Potes</ListItemLink>
        <ListItemLink href="#">Saboneteiras Líquidas</ListItemLink>
      </ul>
    </div>
  )
}

export function Navbar() {
  const throttle = useThrottle(100)
  const headerRef = useRef<HTMLElement>(null)

  function changeHeaderBoxShadowOnScroll() {
    const ref = headerRef.current

    if (!ref) return

    window.scrollY >= ref.offsetTop
      ? ref.classList.add('shadow-sm')
      : ref.classList.remove('shadow-sm')
  }

  useEffect(() => {
    const throttledChangeHeaderBoxShadow = () => throttle(changeHeaderBoxShadowOnScroll)
    window.addEventListener('scroll', throttledChangeHeaderBoxShadow)

    return () => {
      window.removeEventListener('scroll', throttledChangeHeaderBoxShadow)
    }
  }, [throttle])

  return (
    <>
      <header
        ref={headerRef}
        className="shadow-red sticky top-0 border-b border-[#F4F4F4] bg-white"
      >
        <nav className="m-auto flex w-full max-w-[1280px] items-center justify-between px-10 py-3">
          <Link href="/">
            <Image src={Img.KazaLogo} alt="logo" />
          </Link>

          <input
            className="mx-20 flex-1 rounded-[5px] bg-[#f3f3f3] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            type="text"
            placeholder="Busque aqui"
          />

          <div className="flex items-center gap-6">
            <Link
              href="/carrinho"
              className="flex items-center gap-2.5 text-center text-base/[19px] font-medium text-black transition hover:text-primary"
            >
              <Svg.Cart />
              Carrinho
            </Link>

            <Link
              className="flex items-center gap-2.5 text-center text-base/[19px] font-medium text-black transition hover:text-primary"
              href="/entrar"
            >
              <Svg.User />
              Acesse sua conta
            </Link>
            <Link
              className="rounded-full bg-primary px-5 py-2 font-medium text-white transition hover:brightness-[0.85]"
              href="/cadastrar"
            >
              Criar conta
            </Link>
          </div>

          <div className="hidden">
            <Link href="auth/entrar">
              <Svg.User />
            </Link>

            <Link href="#">
              <Svg.Cart />
            </Link>
          </div>

          <div className="hidden">
            <Svg.BurgerMenu />
            <ul>
              <li>
                <Link href="/entrar">
                  <Svg.User />
                  Entre ou <br /> Cadastre-se
                </Link>
              </li>

              <li>
                <Link href="/carrinho">
                  <Svg.Cart />
                  Carrinho
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="border-y border-[rgba(0,0,0,0.025)] bg-[rgba(0,0,0,0.02)]">
          <nav className="m-auto flex w-full max-w-[1280px] items-center justify-between px-10">
            <div className="flex gap-8">
              <NavbarListItem>Acessórios de Banheiro</NavbarListItem>
            </div>

            <Link
              href="/contato"
              className="text-base/[19px] font-medium text-black transition hover:text-primary"
            >
              Fale conosco
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
