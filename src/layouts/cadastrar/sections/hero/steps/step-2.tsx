import InputMask from 'react-input-mask'
import { StepProps } from './istep-props'
import * as Svg from './svg'

export function SecondStep({ value, onChange, errors, register }: StepProps) {
  return (
    <>
      <InputMask
        type="text"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        value={value}
        mask="999.999.999-99"
        maskChar=""
        placeholder="Digite seu CPF..."
        autoComplete="off"
        {...register('cpf')}
      />
      {errors.cpf && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.cpf.message}</span>
        </div>
      )}

      <InputMask
        type="text"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        mask="99 99999-9999"
        maskChar=""
        placeholder="Digite seu n° de telefone..."
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
