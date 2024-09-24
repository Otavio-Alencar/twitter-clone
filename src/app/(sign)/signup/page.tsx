import { Logo } from '@/components/ui/logo'

import { SignUpForm } from '@/components/signForms/signupform'

const Page = () => {
  return (
    <div className="mt-12 flex w-full justify-center gap-5 px-6">
      <div className="flex w-full max-w-lg flex-col gap-8">
        <div>
          <Logo size={56}></Logo>
        </div>
        <p className="text-xl">Faça seu Cadastro</p>
        <div>
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default Page
