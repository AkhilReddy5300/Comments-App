import './index.css'

const CommentItem = props => {
  const {item, toggleLike, deleteIcon2} = props
  const {id, name, comment, bgColors, isLike} = item

  const toggleBtn = () => {
    toggleLike(id)
  }

  const remove = () => {
    deleteIcon2(id)
  }

  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const buttonColor = isLike ? 'btn-blue' : ''

  return (
    <li className="lists">
      <div className="cont-1">
        <div className={`${bgColors} round`}>{name[0]}</div>
        <p className="para2">{name}</p>
        <p className="para3">less than a minute ago</p>
      </div>
      <p className="para4">{comment}</p>
      <div className="buttons-cont">
        <div className="like-cont">
          <button
            type="button"
            className={`${buttonColor} button2`}
            onClick={toggleBtn}
          >
            <img src={imgUrl} alt="like" className="likeicon" />
          </button>
          <p className={`${buttonColor} like-txt`}>Like</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="button2"
          onClick={remove}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="icon-2"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
