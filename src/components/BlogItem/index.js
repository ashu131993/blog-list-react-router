// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <div className="blog-item-container">
      <div className="title-date-container">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </div>
  )
}

export default BlogItem
