import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IIcon, IUserInfo } from "../../../@types"
import { useGlobalContext } from "../../../context/heroContext"
import { EIconType } from "../../../utils"
import { formatDate } from "../../../utils/date"

interface IconProps {
  icon: IIcon, 
  userInfo: IUserInfo
}

const Icon: React.FC<IconProps> = ({ icon, userInfo }) => {

  const { heroContent, setHeroContent } = useGlobalContext()

  const selectUserInfo = (): string => {
    switch(icon.iconType) {
      case EIconType.User:
        return `${userInfo.name.first} ${userInfo.name.last}`
      case EIconType.Email:
        return userInfo.email
      case EIconType.Birthday:
        return formatDate(userInfo.dob.date)
      case EIconType.Address:
        return `${userInfo.location.street.number} ${userInfo.location.street.name}`
      case EIconType.Phone:
        return userInfo.cell
      case EIconType.Password:
        return userInfo.login.password
      default:
        return ''
    }
  }

  const handleMouseOver = (): void => {
    const title = selectUserInfo()
    setHeroContent({
      title: title,
      subtitle: icon.text,
      type: icon.iconType
    })
  } 

  const isActive = (): string => {
    return heroContent.type === icon.iconType ? 'active' : ''
  }

  return <div className={`icon ${isActive()}`} onMouseEnter={handleMouseOver}>
    <FontAwesomeIcon icon={icon.icon} />
  </div>
}

export default Icon