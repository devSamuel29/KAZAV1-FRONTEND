import Image from 'next/image'
import Link from 'next/link'
import ArrowRight from '../../public/svg/arrow-right.svg'

export default function LoginForm() {
    return (
        <>
            <div className="login-link-register">
                <p>Novo por aqui?<br />Clique na seta ao lado para Cadastrar-se</p>
                <Link href="/auth/cadastrar"><Image src={ArrowRight.src} alt="arrow-right" width={24} height={24}/></Link>
            </div>

            <form className="login-form" method="POST">
                <div className="login-title">
                    <h1>Já possuo uma conta na KazaRioBranco</h1>
                    <p>Acesse agora sua conta para acompanhar seus pedidos, ter ofertas exclusivas e muito mais.</p>
                </div>

                <input className="form-input-box" type="email" placeholder="Digite seu email" name="email" />

                <input className="form-input-box" type="password" placeholder="Digite sua senha" name="password" />


                <div className="form-check form-check-custom">
                    <input className="form-check-input" type="checkbox" name="remember" />


                </div>

                <div className="form-button">
                    <button type="submit" className="btn btn-custom">
                        Entrar
                    </button>

                    <Link className="btn btn-link" href="#">
                        Esqueceu sua senha?
                    </Link>
                </div>
            </form>
        </>
    )
}