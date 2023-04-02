import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type newsCardProps = {
    title: string,
    link: string,
    image: string | undefined,
    articleId: string,
}
const SavedNewsCard = ({
    articleId,
    title,
    image,
    link
}: newsCardProps) => {

    const { deleteFromSavedArticles, userId } = useContext(AuthContext)
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={image} title={title}
                >  </CardMedia>
                <h3>{title}</h3>
                <a href={link} target="_blank" >{link}</a>
                <button onClick={() => deleteFromSavedArticles(userId, articleId)} >Remove</button>
            </Card>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default SavedNewsCard