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

export function FourthStep({ errors, register }: StepProps) {
  return (
    <>
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
    </>
  )
}
