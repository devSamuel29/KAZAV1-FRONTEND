import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as Svg from '../svg'

const passwordsFieldsSchema = z
  .object({
    password: z
      .string()
      .nonempty('Você deve inserir sua senha')
      .min(8, 'A senha deve ter no mínimo 6 caracteres')
      .max(16, 'A senha não deve ter mais do que 16 caracteres'),
    passwordConfirmation: z
      .string()
      .nonempty('Você confirmar sua senha novamente')
      .min(8)
      .max(16),
  })
  .refine(data => data.password !== data.passwordConfirmation, {
    message: 'As senhas devem ser iguais',
    path: ['passwordConfirmation'],
  })

type PasswordsFieldsSchema = z.infer<typeof passwordsFieldsSchema>

export function PasswordsFields() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<PasswordsFieldsSchema>({
    resolver: zodResolver(passwordsFieldsSchema),
  })

  const submitForm = async () => {
    const isValid = await trigger()

    if (isValid) {
      console.log('PENSAR EM FAZER O FETCH')
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="password"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        placeholder="Digite sua senha..."
        {...register('password')}
      />
      {errors.password && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.password.message}</span>
        </div>
      )}

      <input
        type="password"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        placeholder="Digite sua senha novamente..."
        {...register('passwordConfirmation')}
      />
      {errors.passwordConfirmation && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.passwordConfirmation.message}</span>
        </div>
      )}

      <div className="flex flex-row space-x-5 text-sm font-medium text-white">
        <button
          type="button"
          id="prev-3"
          className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
        >
          Anterior
        </button>

        <button
          type="submit"
          className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
          onClick={handleSubmit(submitForm)}
        >
          Enviar
        </button>
      </div>
    </div>
  )
}
