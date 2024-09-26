import { EditInputs } from '@/components/editlayout/editinputs'
import { CoverProfile } from '@/components/profilecomponents/coverprofile'
import { HeaderProfile } from '@/components/profilecomponents/headerprofile'

const Page = () => {
  return (
    <div>
      <HeaderProfile edit={true} />
      <CoverProfile showButton={false} edit={true} />
      <EditInputs />
    </div>
  )
}

export default Page
