import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import * as Svg from './svg'

interface StepProps {
  register: UseFormRegister<{
    firstname: string
    lastname: string
  }>
  errors: FieldErrorsImpl<{
    firstname: string
    lastname: string
  }>
}

const inputs = [
  {
    
  }
]
export function FirstStep({ errors, register }: StepProps) {
  return (
    <>
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
