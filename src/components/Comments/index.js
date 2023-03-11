import {Component} from 'react'
import './index.css'
import {v4 as uuidV4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', count: 0}

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  submitPage = event => {
    event.preventDefault()

    const {name, comment, count, commentsList} = this.state
    const bgColors =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newList = {
      id: uuidV4(),
      name,
      comment,
      bgColors,
      isLike: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newList],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  deleteIcon2 = id => {
    const {commentsList} = this.state
    const filterItems = commentsList.filter(each => each.id !== id)

    this.setState(prevState => ({
      commentsList: filterItems,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state

    return (
      <div className="bg-cont">
        <h1 className="header">Comments</h1>
        <div className="input-cont">
          <div className="order2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <div className="order1">
            <p className="para1">Say Something about 4.0 Technologies</p>
            <form onSubmit={this.submitPage}>
              <input
                type="text"
                placeholder="Your Name"
                className="input1"
                value={name}
                onChange={this.onName}
              />
              <br />
              <textarea
                rows="8"
                cols="55"
                placeholder="Your Comment"
                className="input1"
                value={comment}
                onChange={this.onComment}
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
        </div>

        <hr />
        <div className="count-cont">
          <div className="count">{count}</div>
          <p className="count-txt">Comments</p>
        </div>
        <ul>
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              item={each}
              toggleLike={this.toggleLike}
              deleteIcon2={this.deleteIcon2}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
