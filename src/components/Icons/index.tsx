import React from "react"
import { EIconType } from "../../utils"
import { faUser, faEnvelope, faCalendarAlt, faMapMarkedAlt, faPhoneAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { IIcon, IUserInfo } from "../../@types";

const actions: Array<IIcon> = [
  {
    iconType: EIconType.User,
    icon: faUser,
    text: 'Hi, My name is'
  },
  {
    iconType: EIconType.Email,
    icon: faEnvelope,
    text: 'My email address is'
  },
  {
    iconType: EIconType.Birthday,
    icon: faCalendarAlt,
    text: 'My birthday is'
  },
  {
    iconType: EIconType.Address,
    icon: faMapMarkedAlt,
    text: 'My address is'
  },
  {
    iconType: EIconType.Phone,
    icon: faPhoneAlt,
    text: 'My phone number is'
  },
  {
    iconType: EIconType.Password,
    icon: faLock,
    text: 'My password is'
  }
]

const Icons: React.FC<{ userInfo: IUserInfo }> = ({ userInfo }) => {
  return <section className="icons">
    {actions.map(icon => {
      return <Icon key={icon.iconType} icon={icon} userInfo={userInfo}/>
    })}
  </section>
}

export default Icons