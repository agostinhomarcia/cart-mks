import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { LoadingProps } from './loading.interface';

const Loading: React.FC<LoadingProps> = ({ products }) => {
  return (
    <Grid container width='100%' height='100%' data-testid='loading-component'>
      <Skeleton variant='rectangular' width='100%' height='101px' />

      <Grid
        container
        wrap='wrap'
        marginTop='40px'
        width='100%'
        height='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          container
          width='90%'
          height='100%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          style={{
            maxWidth: '938px',
            minHeight: '601px',
          }}
        >
          {Array.from({ length: products }, (_, index) => (
            <Box
              key={index}
              width='40%'
              height='30%'
              marginTop='5%'
              style={{
                maxWidth: '217.56px',
                maxHeight: '285px',
              }}
            >
              <Skeleton
                variant='rounded'
                width='100%'
                height='100%'
                style={{
                  maxWidth: '217.56px',
                  maxHeight: '285px',
                }}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Loading;
