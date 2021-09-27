import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { EIconType } from "../utils"

export interface IDataApi {
  results: Array<IUserInfo>;
  info: IApiInfo
}

export interface IUserInfo {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  }
  location: {
    street: {
      number: number;
      name: string
    }
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    }
    timezone: {
      offset: string;
      description: string;
    }
  }
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  }
  dob: {
    date: string;
    age: number;
  }
  registered: {
    date: string;
    age: number;
  }
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  }
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
  nat: string;
}

export interface IApiInfo {
  seed: string;
  results: number;
  page: number;
  versione: string
}

export interface IIcon { 
  iconType: EIconType, 
  icon: IconDefinition, 
  text: string 
}

export interface IHeroContent {
  title: string;
  subtitle: string;
  type: EIconType | undefined;
}