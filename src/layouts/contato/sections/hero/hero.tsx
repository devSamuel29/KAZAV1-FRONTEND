import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { z } from 'zod'
import * as Svg from './svg'

const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty('Você deve inserir seu nome')
    .min(5, 'Nome inválido, muito pequeno!'),
  email: z
    .string()
    .nonempty('Você deve inserir seu email!')
    .email('Formato de email inválido!'),
  phone: z
    .string()
    .nonempty('Você deve inserir seu número de telefone')
    .length(13, 'Número de telefone inválido!')
    .refine(value => validatePhone(value), 'Número de telefone inválido!'),
  reason: z.string().nonempty('Você deve inserir um motivo válido!'),
  description: z.string().nonempty('Você deve descrever melhor seu problema!'),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

async function validatePhone(phone: string) {
  phone = phone.replace(/[\s-]/g, '')
  const formatedPhone = `+55${phone}`
  return await axios
    .get('https://api-bdc.net/data/phone-number-validate', {
      params: {
        number: formatedPhone,
        countryCode: 'br',
        localityLanguage: 'pt-br',
        key: 'bdc_d158b21a05d64c2ba1ccd85c3a1c353c',
      },
    })
    .then(response => {
      return response.data.isValid
    })
}

export function Hero() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  })

  async function onSubmit() {
    return
  }

  return (
    <div className="my-24 flex items-center justify-center space-x-14">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15924.898193769119!2d-38.5064146!3d-3.7612393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74956bb739943%3A0xd2eb48066cc31ba6!2sKaza%20Rio%20Branco!5e0!3m2!1spt-BR!2sbr!4v1679683615047!5m2!1spt-BR!2sbr"
        width="600"
        height="513"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <form
        className="flex w-96 max-w-[80%] flex-col rounded-md bg-[rgba(235,235,235,0.8)] p-10"
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        method="POST"
      >
        <h1 className="pb-4 text-xl font-bold">Fale conosco</h1>

        <div className="relative mb-6 flex flex-col">
          <input
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            type="text"
            placeholder="Digite seu nome completo..."
            {...register('name')}
          />
          {errors.name && (
            <>
              <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
              <span className="absolute top-full text-sm text-primary">
                {errors.name.message}
              </span>
            </>
          )}
        </div>

        <div className="relative mb-6 flex flex-col">
          <input
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            type="text"
            placeholder="Digite seu email..."
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
          <InputMask
            type="text"
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            mask="99 99999-9999"
            maskChar=""
            placeholder="Digite seu n° de telefone..."
            {...register('phone')}
          />
          {errors.phone && (
            <>
              <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
              <span className="absolute top-full text-sm text-primary">
                {errors.phone.message}
              </span>
            </>
          )}
        </div>

        <div className="relative mb-6 flex flex-col">
          <select
            className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            {...register('reason')}
          >
            <option value="" disabled selected>
              Selecione um motivo
            </option>
            <option value="suporte">Suporte</option>
            <option value="feedback">Feedback</option>
            <option value="outro">Outro</option>
          </select>
          {errors.reason && (
            <>
              <Svg.Incorrect className="absolute right-5 top-0 my-[9px] hover:brightness-[0.75]" />
              <span className="absolute top-full text-sm text-primary">
                {errors.reason.message}
              </span>
            </>
          )}
        </div>

        <div className="relative mb-6 flex flex-col">
          <textarea
            className="h-20 resize-none rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            placeholder="Digite aqui..."
            {...register('description')}
          ></textarea>
          {errors.description && (
            <>
              <Svg.Incorrect className="absolute right-3 top-0 my-[9px] hover:brightness-[0.75]" />
              <span className="absolute top-full text-sm text-primary">
                {errors.description.message}
              </span>
            </>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-primary p-2 font-medium text-white transition hover:brightness-[0.85]"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
