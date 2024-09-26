import { HeaderProfile } from '@/components/profilecomponents/headerprofile'
import { ProfileFeed } from '@/components/profilecomponents/profilefeed'
import { ProfileInfo } from '@/components/profilecomponents/profileinfo'

const Page = () => {
  return (
    <div>
      <HeaderProfile />
      <ProfileInfo />
      <ProfileFeed />
    </div>
  )
}

export default Page
