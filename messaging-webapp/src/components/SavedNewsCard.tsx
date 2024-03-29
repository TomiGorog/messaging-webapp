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
import typewriter from '../assets/images/typewriter.jpg'

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
        <Grid item sx={{
            padding: 0,
            marginBottom: 3,
            marginTop: 3,
            width: {
                xs: 0.8,
                sm: 0.45,
                md: 0.225
            },
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center',
        }}>
            <Card sx={{
                maxWidth: {
                    xs: 0.9,
                    padding: 0
                },
                width: 1

            }}>
                <CardMedia sx={{ height: 140 }} image={image ? image : typewriter} title={title}
                >  </CardMedia>
                <CardContent sx={{ height: 325, marginBottom: 4, overflow: 'hidden' }}>
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
                    alignItems: 'center'
                }}>
                    <Button size="small" onClick={() => deleteFromSavedArticles(userId, articleId)} ><DeleteIcon fontSize="large"></DeleteIcon></Button>
                    <Link component="button" href="#"
                        variant="body2" underline='hover' target="_blank" color="primary" rel="noreferrer noreferrer"
                    ><ShareIcon fontSize="large" ></ShareIcon></Link>
                    <Link fontSize="1.2rem" component="button" href={link}
                        variant="body2" underline='hover' target="_blank" color="primary" rel="noreferrer noreferrer"
                    >Read more</Link>
                </CardActions>
            </Card>
        </Grid >
    )
}

export default SavedNewsCard