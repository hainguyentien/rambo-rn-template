import { NavigatorScreenParams, ParamListBase } from '@react-navigation/native'
import { MODALS, ROUTES, STACKS } from '@Routes/names'

export interface RootStackParamsList extends ParamListBase {
  [STACKS.AUTHORIZED]: NavigatorScreenParams<AuthorizedStackParamsList>
  [ROUTES.WELCOME]: undefined
  [MODALS.GLOBAL]: undefined
}

export interface AuthorizedStackParamsList extends ParamListBase {
  [ROUTES.SPLASH]: undefined
}
