import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ProgressBar } from './progress-bar'
import * as Svg from './svg'

const registerUserFormSchema = z
  .object({
    firstname: z.string().nonempty('Você deve inserir seu nome').min(3),
    lastname: z.string().nonempty('Você deve inserir seu sobrenome').min(3),
    cpf: z
      .string()
      .nonempty('Você deve inserir seu CPF')
      .length(14, 'O CPF deve conter 11 números, não tente inserir pontos ou hífen'),
    phone: z
      .string()
      .nonempty('Você deve inserir seu número de telefone!')
      .length(
        15,
        'O nr de telefone de conter apenas números, não insira quaisquer outros caracteres'
      ),
    email: z
      .string()
      .nonempty('Você deve inserir seu email')
      .email('Formato de email inválido'),
    emailConfirmation: z.string().nonempty('Você deve confirmar seu email novamente'),
    password: z
      .string()
      .nonempty('Você deve inserir sua senha')
      .min(8, 'A senha deve ter no mínimo 6 caracteres')
      .max(16, 'A senha não deve ter mais do que 16 caracteres'),
    passwordConfirmation: z
      .string()
      .nonempty('Você confirmar sua senha novamente')
      .min(8)
      .max(16),
  })
  .refine(data => !isValidCpf(data.cpf), {
    message: 'CPF inválido',
    path: ['cpf'],
  })
  .refine(data => !isValidPhone(data.phone), {
    message: 'Número de telefone inválido',
    path: ['phone'],
  })
  .refine(data => data.email !== data.emailConfirmation, {
    message: 'Os emails devem ser iguais',
    path: ['emailConfirmation'],
  })
  .refine(data => data.password !== data.passwordConfirmation, {
    message: 'As senhas devem ser iguais',
    path: ['passwordConfirmation'],
  })

function isValidCpf(cpf: string): boolean {
  return false
}

function isValidPhone(phone: string): boolean {
  return false
}

type RegisterUserFormData = z.infer<typeof registerUserFormSchema>

export function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
  })

  function validateFormField() {
    return
  }

  async function onSubmit() {
    console.log('NOT IMPLMENTED')
  }

  return (
    <>
      <form
        className="m-auto my-20 w-[800px] max-w-[80%] space-y-3 rounded-md bg-[rgba(235,235,235,0.8)] px-20 py-10"
        onSubmit={handleSubmit(onSubmit)}
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
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu nome..."
            {...register('firstname')}
          />
          {errors.firstname && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.firstname.message}</span>
            </div>
          )}

          <input
            type="text"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu sobrenome..."
            {...register('lastname')}
          />
          {errors.lastname && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.lastname.message}</span>
            </div>
          )}

          <button
            type="button"
            id="next-1"
            className="rounded-md bg-primary p-2 text-sm font-medium text-white transition hover:brightness-[0.85]"
            onClick={validateFormField}
          >
            Próximo
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu CPF..."
            data-mask="000.000.000-00"
            maxLength={14}
            {...register('cpf')}
          />
          {errors.cpf && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.cpf.message}</span>
            </div>
          )}

          <input
            type="text"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu n° de telefone..."
            data-mask="(00) 00000-0000"
            maxLength={15}
            {...register('phone')}
          />
          {errors.phone && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.phone.message}</span>
            </div>
          )}

          <div className="flex flex-row space-x-5 text-sm font-medium text-white">
            <button
              type="button"
              id="prev-1"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Anterior
            </button>

            <button
              type="button"
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
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite seu email..."
            {...register('email')}
          />
          {errors.email && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.email.message}</span>
            </div>
          )}

          <input
            type="text"
            className="focus:shadow-[0_0_0_2px]focus:shadow-primary rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none"
            placeholder="Digite novamente seu email..."
            {...register('emailConfirmation')}
          />
          {errors.emailConfirmation && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.emailConfirmation.message}</span>
            </div>
          )}

          <div className="flex flex-row space-x-5 text-sm font-medium text-white">
            <button
              type="button"
              id="prev-2"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
            >
              Anterior
            </button>

            <button
              type="button"
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
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite sua senha..."
            {...register('password')}
          />
          {errors.password && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.password.message}</span>
            </div>
          )}

          <input
            type="password"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite sua senha novamente..."
            {...register('passwordConfirmation')}
          />
          {errors.passwordConfirmation && (
            <div className="flex items-center space-x-2 text-primary">
              <Svg.Incorrect />
              <span>{errors.passwordConfirmation.message}</span>
            </div>
          )}

          <div className="flex flex-row space-x-5 text-sm font-medium text-white">
            <button
              type="button"
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
