import React from 'react'
import MenuUsuario from './menuUsuario'
import { useContext } from 'react'
import { dataContent } from '../componentes/dataContent/dataConten'

export  default function DefaulLayoutUsuario({children}) {
  const {usuario}=useContext(dataContent);
  return (
    <>
    <header>
      <MenuUsuario correoUsuario={usuario.email}/>
    </header>
    <main>
      {children}
    </main>
    </>
  )
}
