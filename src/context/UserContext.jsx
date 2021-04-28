import React, { createContext, useState } from 'react'

const userContext = createContext({ error: 'not permission' })

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <userContext.Provider value={{ user, setUser }}>
      { children}
    </userContext.Provider>
  )
}

export default userContext