import { StepProps } from './istep-props'
import * as Svg from './svg'

export function FirstStep({ errors, register }: StepProps) {
  return (
    <>
      <input
        type="text"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        placeholder="Digite seu nome..."
        {...register('firstname')}
      />
      {errors.firstname && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.firstname.message}</span>
        </div>
      )}

      <input
        type="text"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        placeholder="Digite seu sobrenome..."
        {...register('lastname')}
      />
      {errors.lastname && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.lastname.message}</span>
        </div>
      )}
    </>
  )
}
