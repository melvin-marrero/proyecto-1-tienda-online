import Menu from "../menus";


export default function DefaulLayaout( { children } ) {
  return (
    <>
    <header>
      <Menu />
    </header>
    <main>
      {children}
    </main>
    </>
  )
}
