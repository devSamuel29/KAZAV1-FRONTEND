import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { cpf } from 'cpf-cnpj-validator'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ProgressBar } from './progress-bar'
import { FirstStep, FourthStep, SecondStep, ThirdStep } from './steps'

const nameRegex = /^[a-zA-ZÀ-úÇç]+$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d.*\d).+$/

const formFieldsShema = z
  .object({
    firstname: z
      .string()
      .nonempty('Você deve inserir seu nome')
      .min(3, 'O nome deve conter no mínimo 3 caracteres')
      .regex(nameRegex, 'Caracteres inválidos!'),
    lastname: z
      .string()
      .nonempty('Você deve inserir seu sobrenome')
      .min(3, 'O sobrenome deve conter no mínimo 3 caracteres')
      .regex(nameRegex, 'Caracteres inválidos!'),
    cpf: z
      .string()
      .nonempty('Você deve inserir seu CPF')
      .length(14, 'O CPF deve conter 11 números, não tente inserir pontos ou hífen')
      .refine(value => cpf.isValid(value), 'CPF inválido'),
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
    emailConfirmation: z
      .string()
      .nonempty('Você deve confirmar seu email')
      .email('Formato de email inválido'),
    password: z
      .string()
      .nonempty('Você deve inserir sua senha')
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .regex(
        passwordRegex,
        'A senha deve conter uma letra maiúscula e no mínimo dois números'
      ),
    passwordConfirmation: z
      .string()
      .nonempty('Você confirmar sua senha novamente')
      .min(8, 'A confirmação de senha deve ter no mínimo 8 caracteres'),
  })
  .refine(data => data.email === data.emailConfirmation, {
    message: 'Os emails devem ser iguais',
    path: ['emailConfirmation'],
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: 'As senhas devem ser iguais',
    path: ['passwordConfirmation'],
  })

type FormFieldsShema = z.infer<typeof formFieldsShema>

const steps: Record<number, Partial<keyof FormFieldsShema>[]> = {
  1: ['firstname', 'lastname'],
  2: ['cpf', 'phone'],
  3: ['email', 'emailConfirmation'],
  4: ['password', 'passwordConfirmation'],
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

  const [formStep, setFormStep] = useState<number>(1)

  async function nextStep() {
    const stepIsValid = await trigger(steps[formStep])
    if (stepIsValid) {
      setFormStep(currentStep => currentStep + 1)
    }
  }

  async function previousStep() {
    setFormStep(currentStep => currentStep - 1)
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
      setFormStep(1)
      reset()
    }
  }

  return (
    <>
      <form
        className="m-auto my-20 w-[800px] max-w-[80%] rounded-md bg-[rgba(235,235,235,0.8)] px-20 py-10"
        method="POST"
      >
        <div className="mb-3">
          <h1 className="text-2xl font-medium">Quero criar uma conta na KazaRioBranco</h1>
          <p>
            Crie sua conta na KazaRioBranco agora e acesse promoções exclusivas, fique por
            dentro das novidades e acompanhe suas compras!
          </p>
        </div>

        <ProgressBar progressPercentage={formStep} />

        <div className="flex flex-col space-y-4">
          {formStep === 1 && (
            <>
              <FirstStep errors={errors} register={register} />
              <button
                type="button"
                className="w-full rounded-md bg-primary p-2 text-sm font-medium text-white transition hover:brightness-[0.85]"
                onClick={nextStep}
              >
                Próximo
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          {formStep === 2 && (
            <>
              <SecondStep errors={errors} register={register} />
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
            </>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          {formStep === 3 && (
            <>
              <ThirdStep errors={errors} register={register} />
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
            </>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          {formStep === 4 && (
            <>
              <FourthStep errors={errors} register={register} />
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
            </>
          )}
        </div>
      </form>
    </>
  )
}
