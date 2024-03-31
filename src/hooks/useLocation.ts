import { useEffect, useState } from "react"
import { getLastKnownPositionAsync, requestForegroundPermissionsAsync } from "expo-location"

type Location = { latitude: number; longitude: number }

const useLocation = () => {
  const [location, setLocation] = useState<Location | null>(null)

  useEffect(
    () =>
      void (async () => {
        try {
          const { granted } = await requestForegroundPermissionsAsync()
          if (!granted) return
          const res = await getLastKnownPositionAsync()
          setLocation(res ? { latitude: res.coords.latitude, longitude: res.coords.longitude } : null)
        } catch (error) {
          console.log("Error while getting location:", error)
        }
      })(),
    []
  )

  return location
}

export default useLocation
