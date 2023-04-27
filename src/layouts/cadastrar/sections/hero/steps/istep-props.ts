import { ChangeEventHandler } from 'react'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

export interface StepProps {
  register: UseFormRegister<{
    firstname: string
    lastname: string
    cpf: string
    phone: string
    email: string
    emailConfirmation: string
    password: string
    passwordConfirmation: string
  }>
  errors: FieldErrorsImpl<{
    firstname: string
    lastname: string
    cpf: string
    phone: string
    email: string
    emailConfirmation: string
    password: string
    passwordConfirmation: string
  }>
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
