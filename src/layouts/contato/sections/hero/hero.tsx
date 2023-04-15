import Styles from "@/styles/ContactForm.module.css";

export function Hero() {
    return (
        <div className="flex flex-wrap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15924.898193769119!2d-38.5064146!3d-3.7612393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74956bb739943%3A0xd2eb48066cc31ba6!2sKaza%20Rio%20Branco!5e0!3m2!1spt-BR!2sbr!4v1679683615047!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />                

            <form className={Styles.contactForm} id="contact-form" method="POST">
                <h1>Fale conosco!</h1>
                <input className={Styles.contactFormInput} type="text" id="name" placeholder="Digite seu nome completo..." />
                {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

                <input className={Styles.contactFormInput} type="text" id="email" placeholder="Digite seu nome email..." />
                {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

                <input
                    className={Styles.contactFormInput} type="text" id="phone" placeholder="Digite seu número de telefone..." />
                {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

                <select className={Styles.contactFormSelect} id="reason">
                    <option value="" disabled>
                        Selecione um motivo
                    </option>
                    <option value="suporte">Suporte</option>
                    <option value="feedback">Feedback</option>
                    <option value="outro">Outro</option>
                </select>

                <textarea className={Styles.contactFormTextarea} id="description" placeholder="Digite aqui..."></textarea>
                {/* <i className="fas fa-exclamation-circle"></i>
          <i className="fas fa-check-circle"></i>
          <small>Mensagem de erro</small> */}

                <button type="submit" className={Styles.btnSubmit}>
                    Enviar
                </button>
            </form>
        </div>
    )
}
