import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as Svg from './svg'

const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty('Você deve inserir seu nome')
    .min(5, 'Você deve escrever pelo menos seu nome e sobrenome'),
  email: z
    .string()
    .nonempty('Você deve inserir seu email')
    .email('Formato de email inválido'),
  phone: z.string().nonempty('Você deve inserir seu número de telefone').length(15),
  reason: z.string().nonempty('Você deve inserir um motivo válido'),
  description: z.string().nonempty('Você deve descrever a descrição'),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export function Hero() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async () => {
    return
  }

  return (
    <div className="my-24 flex items-center justify-center space-x-14">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15924.898193769119!2d-38.5064146!3d-3.7612393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74956bb739943%3A0xd2eb48066cc31ba6!2sKaza%20Rio%20Branco!5e0!3m2!1spt-BR!2sbr!4v1679683615047!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <form
        className="flex w-96 max-w-[80%] flex-col space-y-3 rounded-md bg-[rgba(235,235,235,0.8)] p-10"
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        method="POST"
      >
        <h1 className="text-xl font-medium">Fale conosco:</h1>

        <input
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="text"
          placeholder="Digite seu nome completo..."
          {...register('name')}
        />
        {errors.name && (
          <div className="flex items-center space-x-2 text-primary">
            <Svg.Incorrect />
            <span>{errors.name.message}</span>
          </div>
        )}

        <input
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="text"
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
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="text"
          maxLength={15}
          placeholder="Digite seu número de telefone..."
          {...register('phone')}
        />
        {errors.phone && (
          <div className="flex items-center space-x-2 text-primary">
            <Svg.Incorrect />
            <span>{errors.phone.message}</span>
          </div>
        )}

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
          <div className="flex items-center space-x-2 text-primary">
            <Svg.Incorrect />
            <span>{errors.reason.message}</span>
          </div>
        )}

        <textarea
          className="h-20 resize-none rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          id="description"
          placeholder="Digite aqui..."
          {...register('description')}
        ></textarea>
        {errors.description && (
          <div className="flex items-center space-x-2 text-primary">
            <Svg.Incorrect />
            <span>{errors.description.message}</span>
          </div>
        )}

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
