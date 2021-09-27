import React from "react"
import { IUserInfo } from "../../@types"

const Avatar: React.FC<{ userInfo: IUserInfo }> = ({ userInfo }) => {
  return <section className="avatar">
    <div className="figure-wrapper">
      <figure>
        <img src={userInfo.picture.large} alt="avatar" />
      </figure>
    </div>
  </section>
}

export default Avatar