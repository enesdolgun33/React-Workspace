import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Golf from '../assets/Golf.jpg';


function MUICard() {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="VW Golf"
                    height="auto"
                    image={Golf}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Volkswagen Golf
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatem porro nam dolorum rerum. Reiciendis eaque unde repellendus autem eum, quo, impedit esse quis consectetur, quasi tempora cumque accusamus quam.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Satın Al</Button>
                    <Button size="small">İletişime geç</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MUICard



// <video tabindex="-1" loop="" aria-label="test" playsinline="" preload="metadata" class="video-with-focal-point__StyledVideo-sc-3f8f7154-0 gRuDdU" src="https://assets.volkswagen.com/is/content/volkswagenag/GL6437%20(original)_1_v01-0x360-730k"></video>