import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/authContext';
import SavedNewsCard from './SavedNewsCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const SavedNews = () => {
    const { savedArticles } = useContext(AuthContext);

    useEffect(() => {
    }, [savedArticles]);

    return (
        <Container>
            <Grid container spacing={5}>
                {
                    savedArticles.map((article: any) => {
                        for (let property in article) {
                            return (
                                <SavedNewsCard key={property} articleId={property} title={article[property].title} link={article[property].link} image={article[property].image} description={article[property].description} />
                            )
                        }
                    })
                }
            </Grid>
        </Container>
    )
}

export default SavedNews