import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as Svg from './svg'

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d.*\d).+$/

const formFieldsShema = z.object({
  email: z
    .string()
    .nonempty('Você deve inserir seu email!')
    .email('Formato de email inválido!'),
  password: z
    .string()
    .nonempty('Você deve inserir sua senha!')
    .min(8, 'A senha deve ter no mínimo 8 caracteres!')
    .regex(passwordRegex, 'Senha inválida!'),
})

type FormFieldsShema = z.infer<typeof formFieldsShema>

export function Hero() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
  } = useForm<FormFieldsShema>({
    resolver: zodResolver(formFieldsShema),
    mode: 'onSubmit',
  })

  async function onSubmit(values: FormFieldsShema) {
    const isValid = await trigger()
    if (isValid) {
      return await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          ...values,
        }),
      })
    }
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
        className="m-auto mb-20 mt-5 flex w-[800px] max-w-[80%] flex-col rounded-md bg-[rgba(235,235,235,0.8)] px-20 py-10"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <h1 className="text-2xl font-bold">Já possuo uma conta na KazaRioBranco</h1>
          <p>
            Acesse agora sua conta para acompanhar seus pedidos, ter ofertas exclusivas e
            muito mais.
          </p>
        </div>

        <div className="relative mb-5 flex flex-col">
          <input
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu email"
            {...register('email')}
          />
          {errors.email && (
            <>
              <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
              <span className="absolute top-full text-sm text-primary">
                {errors.email.message}
              </span>
            </>
          )}
        </div>

        <div className="relative mb-6 flex flex-col">
          <input
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            type="password"
            placeholder="Digite sua senha"
            {...register('password')}
          />
          {errors.password && (
            <>
              <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
              <span className="absolute top-full text-sm text-primary">
                {errors.password.message}
              </span>
            </>
          )}
        </div>

        <div>
          <Link href="#" className="text-blue-600 hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>

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
