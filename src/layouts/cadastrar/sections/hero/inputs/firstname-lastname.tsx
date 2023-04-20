import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as Svg from '../svg'

const firstLastnameSchema = z.object({
  firstname: z
    .string()
    .nonempty('Você deve inserir seu nome')
    .min(3, 'O nome deve conter no mínimo 3 caracteres'),
  lastname: z
    .string()
    .nonempty('Você deve inserir seu sobrenome')
    .min(3, 'O sobrenome deve conter no mínimo 3 caracteres'),
})

type FirstLastnameSchema = z.infer<typeof firstLastnameSchema>

export function FirstLastnameFields() {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<FirstLastnameSchema>({
    resolver: zodResolver(firstLastnameSchema),
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
    <div>
      <div className="flex flex-col space-y-4">
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

        <button
          type="button"
          id="next-1"
          className="rounded-md bg-primary p-2 text-sm font-medium text-white transition hover:brightness-[0.85]"
          onClick={validateFields}
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
