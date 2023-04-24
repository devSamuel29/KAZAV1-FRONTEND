import { useEffect, useRef, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ProgressBar } from './progress-bar'
import * as Svg from './svg'

const formFieldsShema = z
  .object({
    firstname: z
      .string()
      .nonempty('Você deve inserir seu nome')
      .min(3, 'O nome deve conter no mínimo 3 caracteres'),
    lastname: z
      .string()
      .nonempty('Você deve inserir seu sobrenome')
      .min(3, 'O sobrenome deve conter no mínimo 3 caracteres'),
    cpf: z
      .string()
      .nonempty('Você deve inserir seu CPF')
      .length(14, 'O CPF deve conter 11 números, não tente inserir pontos ou hífen')
      .refine(value => isValidCpf(value), 'CPF inválido'),
    phone: z
      .string()
      .nonempty('Você deve inserir seu número de telefone!')
      .length(
        15,
        'O nr de telefone de conter apenas números, não insira quaisquer outros caracteres'
      )
      .refine(value => isValidPhone(value), 'Número de telefone inválido'),
    email: z
      .string()
      .nonempty('Você deve inserir seu email')
      .email('Formato de email inválido'),
    emailConfirmation: z
      .string()
      .nonempty('Você deve confirmar seu email')
      .email('Formato de email inválido'),
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
  .refine(data => data.email === data.emailConfirmation, {
    message: 'Os emails devem ser iguais',
    path: ['emailConfirmation'],
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'As senhas devem ser iguais',
    path: ['passwordConfirmation'],
  })

function isValidCpf(data: string): boolean {
  return true
}

function isValidPhone(data: string): boolean {
  return true
}

type FormFieldsShema = z.infer<typeof formFieldsShema>

const steps: Record<number, Partial<keyof FormFieldsShema>[]> = {
  0: ['firstname', 'lastname'],
  1: ['cpf', 'phone'],
  2: ['email', 'emailConfirmation'],
  3: ['password', 'passwordConfirmation'],
}

export function Hero() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    trigger,
  } = useForm<FormFieldsShema>({
    resolver: zodResolver(formFieldsShema),
    mode: 'onChange',
  })

  const [formStep, setFormStep] = useState<number>(0)

  const stepRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (stepRef.current) {
      const previousStepRef = document.getElementById(
        `step-${formStep - 1}`
      ) as HTMLDivElement

      if (previousStepRef && previousStepRef.className.includes('flex')) {
        previousStepRef.className = previousStepRef.className.replace('flex', 'hidden')
      }

      stepRef.current = document.getElementById(`step-${formStep}`) as HTMLDivElement
      if (stepRef.current.className.includes('hidden')) {
        stepRef.current.className = stepRef.current.className.replace('hidden', 'flex')
      }
    }
  }, [formStep])

  async function nextStep() {
    const stepIsValid = await trigger(steps[formStep])
    if (stepIsValid) {
      setFormStep(currentStep => currentStep + 1)
    }
  }

  async function previousStep() {
    setFormStep(currentStep => currentStep - 1)

    if (stepRef.current && stepRef.current.className.includes('flex')) {
      stepRef.current.className = stepRef.current.className.replace('flex', 'hidden')
    }

    const previousStepRef = document.getElementById(
      `step-${previousStep}`
    ) as HTMLDivElement
    if (previousStepRef && previousStepRef.className.includes('hidden')) {
      previousStepRef.className = previousStepRef.className.replace('hidden', 'flex')
    }
  }

  async function onSubmit(values: FormFieldsShema) {
    const result = await fetch('https://api.web3forms.com/submit', {
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

    if (result.status === 200) {
      setFormStep(0)
      reset()
    }
  }

  return (
    <>
      <form
        className="m-auto my-20 w-[800px] max-w-[80%] space-y-3 rounded-md bg-[rgba(235,235,235,0.8)] px-20 py-10"
        method="POST"
      >
        <div>
          <h1 className="text-2xl font-medium">Quero criar uma conta na KazaRioBranco</h1>
          <p>
            Crie sua conta na KazaRioBranco agora e acesse promoções exclusivas, fique por
            dentro das novidades e acompanhe suas compras!
          </p>
        </div>

        <ProgressBar progressPercentage={formStep} />

        <div ref={stepRef} id="step-0" className="hidden flex-col space-y-4">
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
            className="rounded-md bg-primary p-2 text-sm font-medium text-white transition hover:brightness-[0.85]"
            onClick={nextStep}
          >
            Próximo
          </button>
        </div>

        <div ref={stepRef} id="step-1" className="hidden flex-col space-y-4">
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
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
              onClick={previousStep}
            >
              Anterior
            </button>

            <button
              type="button"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
              onClick={nextStep}
            >
              Próximo
            </button>
          </div>
        </div>

        <div ref={stepRef} id="step-2" className="hidden flex-col space-y-4">
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
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
              onClick={previousStep}
            >
              Anterior
            </button>

            <button
              type="button"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
              onClick={nextStep}
            >
              Próximo
            </button>
          </div>
        </div>

        <div ref={stepRef} id="step-3" className="hidden flex-col space-y-4">
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
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
              onClick={previousStep}
            >
              Anterior
            </button>

            <button
              type="submit"
              className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
              onClick={handleSubmit(onSubmit)}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
