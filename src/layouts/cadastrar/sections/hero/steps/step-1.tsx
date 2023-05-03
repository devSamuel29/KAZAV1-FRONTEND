import { useState } from 'react'
import { StepProps } from './istep-props'
import * as Svg from './svg'

export function FirstStep({ errors, register }: StepProps) {
  const [errorFirstname, setErrorFirstname] = useState<boolean>(false)
  const [errorLastname, setErrorLastname] = useState<boolean>(false)

  return (
    <>
      <div className="relative mb-3 flex flex-col">
        <input
          type="text"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          placeholder="Digite seu nome..."
          {...register('firstname')}
        />
        {errors.firstname && (
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorFirstname(true)}
            onMouseLeave={() => setErrorFirstname(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorFirstname && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.firstname.message}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="relative mb-3 flex flex-col">
        <input
          type="text"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          placeholder="Digite seu sobrenome..."
          {...register('lastname')}
        />
        {errors.lastname && (
          <div
            className="flex items-center"
            onMouseEnter={() => setErrorLastname(true)}
            onMouseLeave={() => setErrorLastname(false)}
          >
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            {errorLastname && (
              <span className="absolute right-3 top-1.5 mr-5 rounded-sm bg-primary p-1 text-xs text-white">
                {errors.lastname.message}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  )
}
