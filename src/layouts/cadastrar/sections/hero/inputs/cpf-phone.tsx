import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as Svg from '../svg'

const cpfPhoneSchema = z
  .object({
    cpf: z
      .string()
      .nonempty('Você deve inserir seu CPF')
      .length(14, 'O CPF deve conter 11 números, não tente inserir pontos ou hífen'),
    phone: z
      .string()
      .nonempty('Você deve inserir seu número de telefone!')
      .length(
        15,
        'O nr de telefone de conter apenas números, não insira quaisquer outros caracteres'
      ),
  })
  .refine(data => !isValidCpf(data.cpf), {
    message: 'CPF inválido',
    path: ['cpf'],
  })
  .refine(data => !isValidPhone(data.phone), {
    message: 'Número de telefone inválido',
    path: ['phone'],
  })

function isValidCpf(data: string): boolean {
  return false
}

function isValidPhone(data: string): boolean {
  return false
}

type CpfPhoneSchema = z.infer<typeof cpfPhoneSchema>

export function CpfPhoneFields() {
  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<CpfPhoneSchema>({
    resolver: zodResolver(cpfPhoneSchema),
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
        placeholder="Digite seu CPF..."
        data-mask="000.000.000-00"
        maxLength={14}
        {...register('cpf')}
      />
      {errors.cpf && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.cpf.message}</span>
        </div>
      )}

      <input
        type="text"
        className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
        placeholder="Digite seu n° de telefone..."
        data-mask="(00) 00000-0000"
        maxLength={15}
        {...register('phone')}
      />
      {errors.phone && (
        <div className="flex items-center space-x-2 text-primary">
          <Svg.Incorrect />
          <span>{errors.phone.message}</span>
        </div>
      )}

      <div className="flex flex-row space-x-5 text-sm font-medium text-white">
        <button
          type="button"
          id="prev-1"
          className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
        >
          Anterior
        </button>

        <button
          type="button"
          id="next-2"
          className="w-full rounded-md bg-primary p-2 transition hover:brightness-[0.85]"
          onClick={validateFields}
        >
          Próximo
        </button>
      </div>
    </div>
  )
}
