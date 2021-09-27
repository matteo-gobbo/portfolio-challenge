import React, { useEffect, useState } from 'react'
import axios from "axios"
import { IDataApi, IHeroContent, IUserInfo } from './@types';
import './App.css'
import Icons from './components/Icons';
import Avatar from './components/Avatar';
import Hero from './components/Hero';
import { MyGlobalContext } from './context/heroContext';

function App() {

  const [ heroContent, setHeroContent ] = useState<IHeroContent>({
    title: '',
    subtitle: '',
    type: undefined
  }) 
  
  const [ userInfo, setUserInfo ] = useState<IUserInfo>({
    gender: "",
    name: {
      title: "",
      first: "",
      last: "",
    },
    location: {
      street: {
        number: 0,
        name: ""
      },
      city: "",
      state: "",
      country: "",
      postcode: 0,
      coordinates: {
        latitude: "",
        longitude: "",
      },
      timezone: {
        offset: "",
        description: "",
      }
    },
    email: "",
    login: {
      uuid: "",
      username: "",
      password: "",
      salt: "",
      md5: "",
      sha1: "",
      sha256: "",
    },
    dob: {
      date: "",
      age: 0,
    },
    registered: {
      date: "",
      age: 0,
    },
    phone: "",
    cell: "",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "",
      medium: "",
      thumbnail: "",
    },
    nat: "",
  })

  useEffect(() => {

    const fetchDataFromApi = async () => {
      const { data }: { data: IDataApi } = await axios.get('https://randomuser.me/api');
      setUserInfo(data.results[0])
      return data
    }

    fetchDataFromApi()
  }, [])
  
  return (
    <MyGlobalContext.Provider value={{ heroContent, setHeroContent }}>
      <main>
        <section className="header"></section>
        <Avatar userInfo={userInfo}/>
        <Hero />
        <Icons userInfo={userInfo}/>
      </main>
    </MyGlobalContext.Provider>
  )
}

export default App
