import React from 'react'
type Props = {
    link: string,
    title: string,
    image: string
}
const StoryCard = ({title, link, image}: Props) => {
  return (
    <div>
        <h3>{title}</h3>
        <img src={image}></img>
        <a href={link} target="_blank" >Read full story</a>
    </div>
  )
}

export default StoryCard