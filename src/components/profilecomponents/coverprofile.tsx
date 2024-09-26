import { user } from '@/data/user'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { EditButton } from './editbutton'
import { Camera, X } from 'lucide-react'
import { EditInteractions } from '@/components/editlayout/editbuttons'

interface CoverProps {
  showButton: boolean
  edit?: boolean
}
export const CoverProfile = (props: CoverProps) => {
  return (
    <div>
      <div
        className="flex h-36 w-full items-center justify-center bg-gray-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(' + user.cover + ')' }}
      >
        {props.edit && (
          <div className="flex gap-3">
            <EditInteractions icon={<Camera />} />
            <EditInteractions icon={<X />} />
          </div>
        )}
      </div>

      <div className="mb-2 flex justify-between pl-3">
        <div className="-mt-12">
          <Avatar className="relative flex h-24 w-24 items-center justify-center">
            {props.edit && (
              <EditInteractions absolute={true} icon={<Camera />} />
            )}
            <AvatarImage className="h-24 w-24" src={user.avatar} />
          </Avatar>
        </div>
        {props.showButton && <EditButton />}
      </div>
    </div>
  )
}
