export function Hero() {
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
        id="contact-form"
        method="POST"
      >
        <h1 className="text-xl font-medium">Fale conosco:</h1>

        <input
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="text"
          id="name"
          placeholder="Digite seu nome completo..."
        />
        {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

        <input
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="text"
          id="email"
          placeholder="Digite seu email..."
        />
        {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

        <input
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          type="text"
          id="phone"
          placeholder="Digite seu número de telefone..."
        />
        {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

        <select
          className="rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          id="reason"
        >
          <option value="" disabled>
            Selecione um motivo
          </option>
          <option value="suporte">Suporte</option>
          <option value="feedback">Feedback</option>
          <option value="outro">Outro</option>
        </select>

        <textarea
          className="h-20 resize-none rounded-[5px] px-4 py-2.5 text-[14px]/[17px] caret-primary outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
          id="description"
          placeholder="Digite aqui..."
        ></textarea>
        {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

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
