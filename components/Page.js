import PropTypes from 'prop-types';

const Page = ({children}) => {
  return (
    <main>{children}</main>
  )
}

export default Page

Page.propTypes = {
  children:PropTypes.any
}