import { RouteProp, useRoute } from '@react-navigation/native'
import { useMemo } from 'react'

type NavigationParamsType = Record<string, any>

export function useNavigationParams<Type extends RouteProp<any, string>>() {
  const { params, name, path } = useRoute<Type>()
  const navData = useMemo(() => {
    return typeof params?.navData === 'object'
      ? params?.navData
      : JSON.parse(params?.navData ?? '{}') || {}
  }, [params?.navData])

  // console.log('🚀 ~ file: hooks.ts ~ line 5 ~ params', { params, navData, name, path });
  return {
    ...(params ?? {}),
    navData,
  } as NavigationParamsType
}
