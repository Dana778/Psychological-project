import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export function BasicCard({name, spec, education, methods, cost, photo}) {
  return (
    <Card sx={{ maxWidth: 400 }} style={{margin: 10}}>
      <CardMedia
      
        sx={{ height: 140 }}
        image={photo}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" paddingBottom='1px' gutterBottom>
          {spec}
        </Typography>
        <Typography variant="h5" component="div" paddingBottom='10px'>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} paddingBottom='5px' gutterBottom>
          Cтоимость сеанса: {cost}
        </Typography>
        <Typography variant="body2">
          Образование: {education}
          <br />
          Техники и методы: {methods}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Просмотреть контат</Button>
      </CardActions>
    </Card>
  );
}