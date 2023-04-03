import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext';
import { Card, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { readArticle } from '../services/generalService';

type newsCardProps = {
    title: string,
    link: string,
    image: string | undefined,
    articleId: string,
    description: string
}
const SavedNewsCard = ({
    articleId,
    title,
    image,
    link,
    description
}: newsCardProps) => {

    const { deleteFromSavedArticles, userId } = useContext(AuthContext)

    return (
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 345, }}>
                <CardMedia sx={{ height: 140 }} image={image} title={title}
                >  </CardMedia>
                <CardContent >
                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <Typography sx={{ overflow: 'hidden', maxHeight: 250 }} variant="body2" color="text.secondary">

                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={link} target="_blank" >Read more</a>

                    <Link component="button" href={link}
                        variant="body2" underline='hover' target="_blank" color="primary" rel="noreferrer noreferrer"
                    ></Link>
                    <Link component="button" href="#"
                        variant="body2" underline='hover' target="_blank" color="primary" rel="noreferrer noreferrer"
                    >Share</Link>
                    <Button size="small" variant="outlined" onClick={() => deleteFromSavedArticles(userId, articleId)} >Remove</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default SavedNewsCard