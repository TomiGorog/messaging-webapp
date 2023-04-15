import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/authContext';
import SavedNewsCard from './SavedNewsCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const SavedNews = () => {
    const { savedArticles } = useContext(AuthContext);
    const [startIndex, setStartIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sliceMeasure, setSliceMeasure] = useState(1)
    const [correctSlice, setCorrectSlice] = useState<any>()

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 599) {
                setSliceMeasure(1)
            } else if (window.innerWidth < 899) {
                setSliceMeasure(2)
            } else {
                setSliceMeasure(4)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize);
        let correctSlice = savedArticles.slice(startIndex, startIndex + sliceMeasure)
        setCorrectSlice(correctSlice)
        return () => window.removeEventListener('resize', handleResize);
    }, [sliceMeasure, savedArticles, startIndex]);
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
                    correctSlice && correctSlice.map((article: any) => {
                        for (let property in article) {
                            return (
                                <SavedNewsCard key={property} articleId={property} title={article[property].title} link={article[property].link} image={article[property].image} description={article[property].description} />
                            )
                        }
                    })
                }
            </Grid>
            <button onClick={() => {
                savedArticles.length > startIndex + sliceMeasure && setStartIndex(startIndex + sliceMeasure);
            }}>Arrow next  startindex: {startIndex} slicemeasure: {sliceMeasure}</button>
            <button onClick={() => {
                startIndex - sliceMeasure >= 0 && setStartIndex(startIndex - sliceMeasure);
            }}>Arrow back {windowWidth}</button>
            <p>saved articles length{savedArticles.length} </p>
        </Container >
    )
}

export default SavedNews