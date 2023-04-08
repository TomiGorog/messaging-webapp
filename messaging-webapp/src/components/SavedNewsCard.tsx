import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/authContext';
import { Card, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/material"
import ShareIcon from '@mui/icons-material/ShareOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
const theme = createTheme({

});

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
            <Card sx={{ maxWidth: 400, minHeight: 600, maxHeight: 600, border: 2 }}>
                <CardMedia sx={{ height: 140 }} image={image} title={title}
                >  </CardMedia>
                <CardContent sx={{ height: 350, marginBottom: 4, overflow: 'hidden' }}>
                    <Typography gutterBottom variant="h6" component="h3">
                        {title}
                    </Typography>
                    <Typography sx={{ overflow: 'hidden', height: 200 }} variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}>
                    <Link fontSize="1rem" component="button" href={link}
                        variant="body2" underline='hover' target="_blank" color="primary" rel="noreferrer noreferrer"
                    >Read more</Link>
                    <Link component="button" href="#"
                        variant="body2" underline='hover' target="_blank" color="primary" rel="noreferrer noreferrer"
                    ><ShareIcon ></ShareIcon></Link>
                    <Button size="small" onClick={() => deleteFromSavedArticles(userId, articleId)} ><DeleteIcon fontSize="large"></DeleteIcon></Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default SavedNewsCard