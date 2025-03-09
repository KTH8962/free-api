export interface userDto {
  cell: string
  dob: {
    age: number
    date: string
  }
  gender: string
  id: {
    name: string
    value: string
  }
  location: {
    city: string
    coordinates: {
      latitude: string
      longtitude: string
    }
    contry: string
    postcode: number
    state: string
    street: {
      number: number
      name: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  login: {
    md5: string
    password: string
    salt: string
    sha1: string
    sha256: string
    username: string
    uuid: string
  }
  name: {
    title: string
    first: string
    last: string
  }
  nat: string
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  registered: {
    age: number
    date: string
  }
}
