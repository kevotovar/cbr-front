import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardMedia: {
    height: 300,
  },
});

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  link: string;
}

function PropertyCard({ image, title, address, link }: PropertyCardProps) {
  const styles = useStyles();
  return (
    <Card>
      <CardMedia image={image} title={title} className={styles.cardMedia} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography>{address}</Typography>
      </CardContent>
      <CardActions>
        <Link href={link} passHref>
          <Button component="a">Visitar</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default PropertyCard;
