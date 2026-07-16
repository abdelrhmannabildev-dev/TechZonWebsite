import "./message.css"
function Message({message}) {
  return (
    <div className={message}>
        {message && <p className={`message ${message}`}>{message}</p>}
    </div>
  )
}

export default Message