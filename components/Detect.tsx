import { useState } from 'react'

import { useRouter } from 'expo-router'
const Detect = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const router = useRouter()
    if (isAuth)
      router.navigate("/")
    return (
        null
  )
}

export default Detect