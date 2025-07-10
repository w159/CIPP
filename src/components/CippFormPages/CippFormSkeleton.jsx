<<<<<<< HEAD
import { Box, Grid, Skeleton } from "@mui/material";

const CippFormSkeleton = ({ layout }) => {
  return (
    <Box sx={{ width: "100%", my: 2 }}>
      {layout.map((columns, rowIndex) => (
        <Grid container spacing={2} key={`row-${rowIndex}`} sx={{ mb: 2 }}>
          {Array.from({ length: columns }).map((_, columnIndex) => (
            <Grid item xs={12 / columns} key={`skeleton-${rowIndex}-${columnIndex}`}>
              <Skeleton variant="rectangular" width="100%" />
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default CippFormSkeleton;
=======
import { Box, Skeleton } from "@mui/material";

import { Grid } from "@mui/system";

const CippFormSkeleton = ({ layout }) => {
  return (
    <Box sx={{ width: "100%", my: 2 }}>
      {layout.map((columns, rowIndex) => (
        <Grid container spacing={2} key={`row-${rowIndex}`} sx={{ mb: 2 }}>
          {Array.from({ length: columns }).map((_, columnIndex) => (
            <Grid size={{ xs: 12 / columns }} key={`skeleton-${rowIndex}-${columnIndex}`}>
              <Skeleton variant="rectangular" width="100%" />
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default CippFormSkeleton;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
