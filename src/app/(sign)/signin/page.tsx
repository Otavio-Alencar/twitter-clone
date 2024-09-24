import { Logo } from '@/components/ui/logo'
import { SignInForm } from '@/components/signForms/signinform'

const Page = () => {
  return (
    <div className="mt-12 flex w-full justify-center gap-5 px-6">
      <div className="flex w-full max-w-lg flex-col gap-8">
        <div>
          <Logo size={56}></Logo>
        </div>
        <p className="text-xl">Entre na sua conta</p>
        <div>
          <SignInForm />
        </div>
      </div>
    </div>
  )
}

export default Page
