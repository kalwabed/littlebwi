import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <style jsx global>{`
        #__next {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}

export default Layout
