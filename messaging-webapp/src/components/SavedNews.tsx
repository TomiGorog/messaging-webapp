import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/authContext';
import SavedNewsCard from './SavedNewsCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const SavedNews = () => {
    const { savedArticles } = useContext(AuthContext);
    const [startIndex, setStartIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let sliceMeasure = window.innerWidth
    useEffect(() => {
    }, [savedArticles]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 599) {
                sliceMeasure = 1
            } else if (window.innerWidth < 899) {
                sliceMeasure = 2
            } else {
                sliceMeasure = 5
            }
            console.log(sliceMeasure)
        }
        console.log(sliceMeasure)
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <Container disableGutters
            sx={{
                minWidth: 1,
                padding: {
                    lg: 7
                },
            }}>
            <Grid container spacing={0} sx={{
                backgroundColor: "red",
                justifyContent: "center",
                minWidth: 1,

            }}>
                {
                    savedArticles.slice(startIndex, startIndex + sliceMeasure).map((article: any) => {
                        for (let property in article) {
                            return (
                                <SavedNewsCard key={property} articleId={property} title={article[property].title} link={article[property].link} image={article[property].image} description={article[property].description} />
                            )
                        }
                    })
                }
            </Grid>
            <button onClick={() => {


                setStartIndex(startIndex + sliceMeasure);
            }}>Arrow next {windowWidth}</button>
        </Container >
    )
}

export default SavedNews