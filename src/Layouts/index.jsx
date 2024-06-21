import PropTypes from 'prop-types'

function Layout({children}) {
    Layout.propTypes = {
        children:
        PropTypes.node.isRequired
    }
  return (
    <div className='flex flex-col items-center'>
      {children}
    </div>
  )
}

export default Layout
