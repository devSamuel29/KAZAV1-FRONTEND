import * as React from 'react'
import { CpfPhoneFields, FirstLastnameFields, EmailFields, PasswordsFields } from './inputs'
import { ProgressBar } from './progress-bar'


export function Hero() {
  return (
    <>
      <form
        className="m-auto my-20 w-[800px] max-w-[80%] space-y-3 rounded-md bg-[rgba(235,235,235,0.8)] px-20 py-10"
        method="POST"
      >
        <div>
          <h1 className="text-2xl font-medium">Quero criar uma conta na KazaRioBranco</h1>
          <p>
            Crie sua conta na KazaRioBranco agora e acesse promoções exclusivas, fique por
            dentro das novidades e acompanhe suas compras!
          </p>
        </div>
        <ProgressBar progressPercentage={50} />

        <FirstLastnameFields />

        <CpfPhoneFields />

        <EmailFields />

        <PasswordsFields />
      </form>
    </>
  )
}
