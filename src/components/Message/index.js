import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="login-heading">{message}</h1>
}

export default Message
