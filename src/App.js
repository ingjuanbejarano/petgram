import React from 'react'

import { ListOfCategories } from './components/listOfCategories'
import { ListOfPhotoCards } from './components/listOfPhotoCards'
import { GLobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo'

export const App = () => {
  return (
    <>
      <GLobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}
