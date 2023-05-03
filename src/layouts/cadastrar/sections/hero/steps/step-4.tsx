import { useState } from 'react'
import { StepProps } from './istep-props'
import * as Svg from './svg'

export function FourthStep({ errors, register }: StepProps) {
  const [errorPassword, setErrorPassword] = useState<boolean>(false)
  const [errorPasswordConfirmation, setErrorPasswordConfirmation] =
    useState<boolean>(false)

  return (
    <>
      <div className="relative mb-3 flex flex-col">
        <input
          type="password"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          maxLength={16}
          placeholder="Digite sua senha..."
          {...register('password')}
        />
        {errors.password && (
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorPassword(true)}
            onMouseLeave={() => setErrorPassword(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorPassword && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.password.message}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative mb-3 flex flex-col">
        <input
          type="password"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          maxLength={16}
          placeholder="Digite sua senha novamente..."
          {...register('passwordConfirmation')}
        />
        {errors.passwordConfirmation && (
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorPasswordConfirmation(true)}
            onMouseLeave={() => setErrorPasswordConfirmation(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorPasswordConfirmation && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.passwordConfirmation.message}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  )
}
