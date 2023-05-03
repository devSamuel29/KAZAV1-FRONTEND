import Link from 'next/link'
import * as Svg from './svg'

export function Hero() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <>
      <div className="mx-auto flex  max-w-7xl items-center justify-end px-10 py-6">
        <p>
          Novo por aqui?
          <br />
          Clique na seta ao lado para Cadastrar-se
        </p>
        <Link href="/cadastrar">
          <Svg.ArrowRight className="" />
        </Link>
      </div>

      <form
        className="m-auto mb-20 mt-5 flex w-[800px] max-w-[80%] flex-col space-y-3 rounded-md bg-[rgba(235,235,235,0.8)] px-20 py-10"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-xl font-medium">Já possuo uma conta na KazaRioBranco</h1>
          <p>
            Acesse agora sua conta para acompanhar seus pedidos, ter ofertas exclusivas e
            muito mais.
          </p>
        </div>
        <input
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="email"
          placeholder="Digite seu email"
          name="email"
        />

        <input
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="password"
          placeholder="Digite sua senha"
          name="password"
        />

        <Link href="#" className="text-blue-600 hover:underline">
          Esqueceu sua senha?
        </Link>
        <button
          type="submit"
          className="w-full rounded-md bg-primary p-2 font-medium text-white transition hover:brightness-[0.85]"
        >
          Entrar
        </button>
      </form>
    </>
  )
}
