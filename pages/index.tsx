import Grid from '@material-ui/core/Grid';
import PropertyCard from '../components/PropertyCard';

import { fetchRealtiesSearch, RealtiesSearchPageResponse } from '../services';

export async function getStaticProps() {
  const { data } = await fetchRealtiesSearch();
  return {
    props: {
      data,
    },
  };
}

interface HomeProps {
  data: RealtiesSearchPageResponse;
}

export default function Home({ data }: HomeProps) {
  return (
    <div>
      <Grid container spacing={2} alignItems="stretch">
        {data.items.map((item) => (
          <Grid item key={item.id} xs={12} md={6} lg={4}>
            <PropertyCard
              address={item.description}
              image={item.pictureUrl}
              link={item.url}
              title={item.shortLocation}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
