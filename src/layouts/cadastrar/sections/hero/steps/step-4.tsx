import { StepProps } from './istep-props'
import * as Svg from './svg'

export function FourthStep({ errors, register }: StepProps) {
  return (
    <>
      <div className="relative mb-6 flex flex-col">
        <input
          type="password"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          maxLength={16}
          placeholder="Digite sua senha..."
          {...register('password')}
        />
        {errors.password && (
          <>
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            <span className="absolute top-full text-sm text-primary">
              {errors.password.message}
            </span>
          </>
        )}
      </div>

      <div className="relative mb-6 flex flex-col">
        <input
          type="password"
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          maxLength={16}
          placeholder="Digite sua senha novamente..."
          {...register('passwordConfirmation')}
        />
        {errors.passwordConfirmation && (
          <>
            <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
            <span className="absolute top-full text-sm text-primary">
              {errors.passwordConfirmation.message}
            </span>
          </>
        )}
      </div>
    </>
  )
}
