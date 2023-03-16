import { ref, set } from 'firebase/database'
import { database } from '../firebase/config'

type Props = {
    link: string,
    title: string,
    image: string
}
const StoryCard = ({title, link, image}: Props) => {
  let saveInfo = {
    title, link, image
  }
  const saveArticle = async () => {
  
    // set(ref(database, 'users/' + userId), {
    //   username: name,
    //   email: email,
    //   profile_picture : imageUrl
    // });
  }

  return (
    <div>
        <h3>{title}</h3>
        <img src={image}></img>
        <a href={link} target="_blank" >Read full story</a>
        <button onClick={saveArticle}>Save for later</button>
    </div>
  )
}

export default StoryCard