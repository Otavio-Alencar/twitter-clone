import { CoverProfile } from '@/components/profilecomponents/coverprofile'
import { HeaderProfile } from '@/components/profilecomponents/headerprofile'
import { ProfileFeed } from '@/components/profilecomponents/profilefeed'
import { ProfileInfo } from '@/components/profilecomponents/profileinfo'

const Page = () => {
  return (
    <div>
      <HeaderProfile edit={false} />
      <CoverProfile showButton={true} edit={false} />
      <ProfileInfo />
      <ProfileFeed />
    </div>
  )
}

export default Page
