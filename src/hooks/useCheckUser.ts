import { useState } from 'react'
import api from '../../services/api'

export const useUserUplaod = () => {
  const [openAddUser, setOpenAddUser] = useState(false)
  const [openUserExist, setOpenUserExist] = useState(false)

  const [QRCode, setQRCode] = useState('')

  const handleSubmit = () => {
    api
      .post(`user/${QRCode}`, QRCode)
      .then(() => {
        console.log('Dissmised')
        setOpenAddUser(false)
      })
      .catch((err) => {
        console.error(err)
        setOpenAddUser(false)
      })
  }

  const userExists = (value: string) => {
    api
      .get(`user/${value}`)
      .then((res) => {
        if (res) setOpenUserExist(true)
        else setOpenAddUser(true)
      })
      .catch((e) => {
        console.error(e)
      })
  }
  return {
    handleSubmit,
    openAddUser,
    openUserExist,
    setOpenAddUser,
    setOpenUserExist,
    setQRCode,
    userExists,
  }
}
