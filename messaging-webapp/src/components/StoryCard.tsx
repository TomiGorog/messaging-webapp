import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/config'

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
    console.log(saveInfo, "asd")
    try {
      const docRef = await addDoc(collection(db, "articlelist"), {
        story: saveInfo,    
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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