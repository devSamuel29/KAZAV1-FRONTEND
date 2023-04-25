import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import * as Svg from './svg'

interface StepProps {
  register: UseFormRegister<{
    cpf: string
    phone: string
  }>
  errors: FieldErrorsImpl<{
    cpf: string
    phone: string
  }>
}

export function SecondStep({ errors, register }: StepProps) {
  return (
    <>
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
    </>
  )
}
