import { useState } from 'react'
import { StepProps } from './istep-props'
import * as Svg from './svg'

export function ThirdStep({ errors, register }: StepProps) {
  const [errorEmail, setErrorEmail] = useState<boolean>(false)
  const [errorEmailConfirmation, setErrorEmailConfirmation] = useState<boolean>(false)

  return (
    <>
      <div className="relative mb-3 flex flex-col">
        <input
          type="text"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          placeholder="Digite seu email..."
          {...register('email')}
        />
        {errors.email && (
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorEmail(true)}
            onMouseLeave={() => setErrorEmail(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorEmail && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.email.message}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative mb-3 flex flex-col">
        <input
          type="text"
          className="focus:shadow-[0_0_0_2px]focus:shadow-primary rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none"
          placeholder="Digite novamente seu email..."
          autoComplete="off"
          {...register('emailConfirmation')}
        />
        {errors.emailConfirmation && (
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorEmailConfirmation(true)}
            onMouseLeave={() => setErrorEmailConfirmation(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorEmailConfirmation && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.emailConfirmation.message}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  )
}
