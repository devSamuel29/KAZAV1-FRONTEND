import { StepProps } from './istep-props'
import * as Svg from './svg'

export function ThirdStep({ errors, register }: StepProps) {
  return (
    <>
      <div className="relative mb-6 flex flex-col">
        <input
          type="text"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          placeholder="Digite seu email..."
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && (
          <>
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            <span className="absolute top-full text-sm text-primary">
              {errors.email.message}
            </span>
          </>
        )}
      </div>

      <div className="relative mb-6 flex flex-col">
        <input
          type="text"
          className="focus:shadow-[0_0_0_2px]focus:shadow-primary rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none"
          placeholder="Digite novamente seu email..."
          autoComplete="off"
          {...register('emailConfirmation')}
        />
        {errors.emailConfirmation && (
          <>
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            <span className="absolute top-full text-sm text-primary">
              {errors.emailConfirmation.message}
            </span>
          </>
        )}
      </div>
    </>
  )
}
