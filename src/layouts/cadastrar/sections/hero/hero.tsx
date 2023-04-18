import * as React from 'react'
import * as Svg from './svg'

interface ProgressBarProps {
  progressPercentage: number
}

function ProgressBar({ progressPercentage }: ProgressBarProps): JSX.Element {
  return (
    <div className="h-3 w-full rounded-md bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${
          progressPercentage < 70 ? 'bg-primary' : 'bg-green-600'
        } rounded-md`}
      ></div>
    </div>
  )
}

export function Hero() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <>
      <form
        className="m-auto my-20 w-[800px] max-w-[80%] space-y-3 rounded-md bg-[rgba(235,235,235,0.8)] px-20 py-10"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div>
          <h1 className="text-2xl font-medium">Quero criar uma conta na KazaRioBranco</h1>
          <p>
            Crie sua conta na KazaRioBranco agora e acesse promoções exclusivas, fique por
            dentro das novidades e acompanhe suas compras!
          </p>
        </div>
        <ProgressBar progressPercentage={50} />
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="firstname"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu nome..."
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>

          <input
            type="text"
            id="lastname"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu sobrenome..."
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>

          <button
            id="next-1"
            className="rounded-md bg-primary p-2 text-sm font-medium text-white transition hover:brightness-[0.85]"
          >
            Próximo
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="cpf"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu CPF..."
            data-mask="000.000.000-00"
            maxLength={14}
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>

          <input
            type="text"
            id="phone"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu n° de telefone..."
            data-mask="(00) 00000-0000"
            maxLength={15}
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>
          <div className="flex flex-row space-x-5 text-sm font-medium text-white">
            <button
              id="prev-1"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Anterior
            </button>

            <button
              id="next-2"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Próximo
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            id="email"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu email..."
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>

          <input
            type="text"
            id="email-confirmation"
            className="focus:shadow-[0_0_0_2px]focus:shadow-primary rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none"
            placeholder="Digite novamente seu email..."
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>
          <div className="flex flex-row space-x-5 text-sm font-medium text-white">
            <button
              id="prev-2"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Anterior
            </button>

            <button
              id="next-3"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Próximo
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="password"
            id="password"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite sua senha..."
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>

          <input
            type="password"
            id="password-confirmation"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite sua senha novamente..."
          />
          <Svg.Correct className="hidden" />
          <Svg.Incorrect className="hidden" />
          <small className="hidden">Mensagem de erro</small>
          <div className="flex flex-row space-x-5 text-sm font-medium text-white">
            <button
              id="prev-3"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Anterior
            </button>

            <button
              type="submit"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
