const RegisterForm = () => {
  return (
    <>
      <form className="login-form" id="register-form" method="POST">
        <div className="login-title">
          <h1>Quero criar uma conta na KazaRioBranco</h1>
          <p>
            Crie sua conta na KazaRioBranco agora e acesse promoções exclusivas,
            fique por dentro das novidades e acompanhe suas compras!
          </p>
        </div>

        {/* <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}

        <div className="steps" id="step-1">
          <div className="step-control">
            <input
              type="text"
              id="firstname"
              placeholder="Digite seu nome..."
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>

          <div className="step-control">
            <input
              type="text"
              id="lastname"
              placeholder="Digite seu sobrenome..."
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>
          <button id="next-1" className="btn btn-custom">
            Próximo
          </button>
        </div>

        <div className="steps" id="step-2">
          <div className="step-control">
            <input
              type="text"
              id="cpf"
              placeholder="Digite seu CPF..."
              data-mask="000.000.000-00"
              maxLength={14}
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>

          <div className="step-control">
            <input
              type="text"
              id="phone"
              placeholder="Digite seu n° de telefone..."
              data-mask="(00) 00000-0000"
              maxLength={15}
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>

          <button id="prev-1" className="btn btn-custom">
            Anterior
          </button>
          <button id="next-2" className="btn btn-custom">
            Próximo
          </button>
        </div>

        <div className="steps" id="step-3">
          <div className="step-control">
            <input type="text" id="email" placeholder="Digite seu email..." />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>

          <div className="step-control">
            <input
              type="text"
              id="email-confirmation"
              placeholder="Digite novamente seu email..."
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>

          <button id="prev-2" className="btn btn-custom">
            Anterior
          </button>
          <button id="next-3" className="btn btn-custom">
            Próximo
          </button>
        </div>

        <div className="steps" id="step-4">
          <div className="step-control">
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>

          <div className="step-control">
            <input
              type="password"
              id="password-confirmation"
              placeholder="Digite sua senha novamente..."
            />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Mensagem de erro</small>
          </div>

          <button id="prev-3" className="btn btn-custom">
            Anterior
          </button>
          <button type="submit" className="btn btn-custom">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
