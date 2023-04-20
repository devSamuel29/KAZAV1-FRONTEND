import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as Svg from '../svg'

const emailsFieldsSchema = z
  .object({
    email: z
      .string()
      .nonempty('Você deve inserir seu email')
      .email('Formato de email inválido'),
    emailConfirmation: z.string().nonempty('Você deve confirmar seu email'),
  })
  .refine(data => data.email !== data.emailConfirmation, {
    message: 'Os emails devem ser iguais',
    path: ['emailConfirmation'],
  })

type EmailsFieldsSchema = z.infer<typeof emailsFieldsSchema>

export function EmailFields(display:any) {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<EmailsFieldsSchema>({
    resolver: zodResolver(emailsFieldsSchema),
  })

  const validateFields = async () => {
    const isValid = await trigger()

    if (!isValid) {
      console.log(errors)
    } else {
      console.log('Formulário válido')
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        placeholder="Digite seu email..."
        {...register('email')}
      />
      {errors.email && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.email.message}</span>
        </div>
      )}

      <input
        type="text"
        className="focus:shadow-[0_0_0_2px]focus:shadow-primary rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none"
        placeholder="Digite novamente seu email..."
        {...register('emailConfirmation')}
      />
      {errors.emailConfirmation && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.emailConfirmation.message}</span>
        </div>
      )}

      <div className="flex flex-row space-x-5 text-sm font-medium text-white">
        <button
          type="button"
          id="prev-2"
          className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
        >
          Anterior
        </button>

        <button
          type="button"
          id="next-3"
          className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
          onClick={validateFields}
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
