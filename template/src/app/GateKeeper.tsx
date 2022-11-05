import React from 'react'

interface Props {
  children?: React.ReactNode
}

const GateKeeper: React.FC<Props> = props => {
  return <>{props.children}</>
}

export default GateKeeper
