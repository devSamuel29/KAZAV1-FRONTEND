import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import * as Svg from './svg'

interface StepProps {
  register: UseFormRegister<{
    firstname: string
    lastname: string
    cpf: string
    phone: string
    email: string
    emailConfirmation: string
    password: string
    passwordConfirmation: string
  }>
  errors: FieldErrorsImpl<{
    firstname: string
    lastname: string
    cpf: string
    phone: string
    email: string
    emailConfirmation: string
    password: string
    passwordConfirmation: string
  }>
}

export function ThirdStep({ errors, register }: StepProps) {
  return (
    <>
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
    </>
  )
}
