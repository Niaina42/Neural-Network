import { Paper, Typography, Stack, alpha, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import FactorChart from './FactorChart';

const Factor = ({ factor }) => {
  const theme = useTheme(); 
  const navigation = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const { icon: Icon, color, title, value, max = 100 } = factor;

  const [paletteOption, simplePaletteColorOption] = color.split('.')

  const factorColor = theme.palette[paletteOption][simplePaletteColorOption];
  const doughnutChartData = { color: factorColor, value, max };

  return (
    <Paper
      sx={{
        transition: 'background-color 0.8s',
        '&:hover': {
          bgcolor: 'secondary.main',
          color: 'grey.100',
          cursor: 'pointer',
          '& .iconWrapper': {
            bgcolor: 'secondary.light',
          },
        },
      }}
      elevation={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigation("/function")}
    >
      <Stack alignItems="center" rowGap={3.75} sx={{ py: 2.5, height: 1 }}>
        <Stack alignItems="center" rowGap={1.25}>
          <Typography variant="h6">{title}</Typography>
          <Stack
            justifyContent="center"
            alignItems="center"
            className="iconWrapper"
            sx={{
              height: 30,
              width: 30,
              bgcolor: "#eeeeee",
              borderRadius: '50%'
            }}
          >
            <Icon sx={[isHovered ? { color: 'grey.100' } : { color: factorColor }]} />
          </Stack>
        </Stack>

        {/* <FactorChart
          data={doughnutChartData}
          isHovered={isHovered}
          style={{ height: 112, width: 112 }}
        /> */}
      </Stack>
    </Paper>
  );
};

export default Factor;
