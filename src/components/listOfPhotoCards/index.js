import React from 'react'

import { PhotoCard } from '../photoCard'
import { CardList } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <CardList>
      {[1, 2, 3].map((photoCard) => (
        <PhotoCard key={photoCard} />
      ))}
    </CardList>
  )
}
