import { user } from '@/data/user'
import { BackButton } from './backbutton'

interface headerprofileProps {
  edit?: boolean
}
export const HeaderProfile = (props: headerprofileProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 border-b border-popover py-10 pl-3">
        <BackButton />
        {props.edit === false ? (
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.postCount} posts</p>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Editar Perfil</h1>
        )}
      </div>
    </div>
  )
}
