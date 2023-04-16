import Image from 'next/image'
import Link from 'next/link'
import * as Img from './imgs'
import * as Svg from './svgs'

export function Navbar() {
  return (
    <header className="m-auto w-full max-w-[1280px]">
      <nav className="flex w-full items-center justify-between px-10 py-3">
        <Link href="/">
          <Image src={Img.KazaLogo} alt="logo" />
        </Link>

        <input
          className="mx-20 flex-1 rounded-[5px] bg-[#efeded] px-4 py-2.5 text-[14px]/[17px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
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
    </header>
  )
}
