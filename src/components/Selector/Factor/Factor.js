import { Paper, Typography, Stack, alpha, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import FactorChart from './FactorChart';

const Factor = ({ factor }) => {
  const theme = useTheme(); 
  const navigation = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const { icon: Icon, color, title, slug, max = 100 } = factor;

  const [paletteOption, simplePaletteColorOption] = color.split('.')

  const factorColor = theme.palette[paletteOption][simplePaletteColorOption];

  return (
    <Paper
      sx={{
        background: "#262331",
        border: "1px solid #fff",
        color: "#fff",
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
      onClick={() => navigation(slug)}
    >
      <Stack alignItems="center" rowGap={3.75} sx={{ py: 2.5, height: 1 }}>
        <Stack alignItems="center" rowGap={1.25}>
          <Stack
            justifyContent="center"
            alignItems="center"
            className="iconWrapper"
            sx={{
              height: 40,
              width: 40,
              bgcolor: "#eeeeee",
              borderRadius: '50%'
            }}
          >
            <Icon color={isHovered ? 'grey.100' : 'secondary.main' } />
          </Stack>
          <Typography variant="h6">{title}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Factor;
