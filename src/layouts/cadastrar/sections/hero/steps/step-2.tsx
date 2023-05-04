import InputMask from 'react-input-mask'
import { StepProps } from './istep-props'
import * as Svg from './svg'

export function SecondStep({ value, errors, register }: StepProps) {
  return (
    <>
      <div className="relative mb-6 flex flex-col">
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
          <>
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            <span className="absolute top-full text-sm text-primary">
              {errors.cpf.message}
            </span>
          </>
        )}
      </div>

      <div className="relative mb-6 flex flex-col">
        <InputMask
          type="text"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          mask="99 99999-9999"
          maskChar=""
          placeholder="Digite seu n° de telefone..."
          {...register('phone')}
        />
        {errors.phone && (
          <>
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            <span className="absolute top-full text-sm text-primary">
              {errors.phone.message}
            </span>
          </>
        )}
      </div>
    </>
  )
}
