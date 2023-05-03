import { useState } from 'react'
import InputMask from 'react-input-mask'
import { StepProps } from './istep-props'
import * as Svg from './svg'

export function SecondStep({ value, errors, register }: StepProps) {
  const [errorCpf, setErrorCpf] = useState<boolean>(false)
  const [errorPhone, setErrorPhone] = useState<boolean>(false)

  return (
    <>
      <div className="relative mb-3 flex flex-col">
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
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorCpf(true)}
            onMouseLeave={() => setErrorCpf(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorCpf && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.cpf.message}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative mb-3 flex flex-col">
        <InputMask
          type="text"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          mask="99 99999-9999"
          maskChar=""
          placeholder="Digite seu n° de telefone..."
          {...register('phone')}
        />
        {errors.phone && (
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorPhone(true)}
            onMouseLeave={() => setErrorPhone(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorPhone && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.phone.message}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  )
}
