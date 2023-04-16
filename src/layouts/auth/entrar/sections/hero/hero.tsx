import Link from 'next/link'
import * as Svg from './svg'
import Styles from '~/styles/LoginForm.module.css'

export function Hero() {
  return (
    <div>
      <div className={Styles.loginLinkRegister}>
        <p>
          Novo por aqui?
          <br />
          Clique na seta ao lado para Cadastrar-se
        </p>
        <Link href="/auth/cadastrar">
          <Svg.ArrowRight />
        </Link>
      </div>

      <form className={Styles.loginContainer} method="POST">
        <div className={Styles.loginTitle}>
          <h1>Já possuo uma conta na KazaRioBranco</h1>
          <p>
            Acesse agora sua conta para acompanhar seus pedidos, ter ofertas exclusivas e
            muito mais.
          </p>
        </div>

        <input
          className={Styles.loginFormInput}
          type="email"
          placeholder="Digite seu email"
          name="email"
        />

        <input
          className={Styles.loginFormInput}
          type="password"
          placeholder="Digite sua senha"
          name="password"
        />

        <div className={Styles.rememberMeContainer}>
          <input type="checkbox" name="checkbox" className={Styles.rememberMeInput} />
          <label htmlFor="checkbox">Lembre de mim</label>
        </div>

        <div className={Styles.redirectContainer}>
          <button type="submit" className={Styles.btnSubmit}>
            Entrar
          </button>

          <Link href="#">Esqueceu sua senha?</Link>
        </div>
      </form>
    </div>
  )
}
