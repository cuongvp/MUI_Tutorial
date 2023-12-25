import React from 'react'
import { Grid, Box } from '@mui/material'
function MuiGrid() {
  return (
    <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid md={12} sm={6} item>
            <Box bgcolor={ 'primary.light' } p={2}>Item 1</Box>
        </Grid>
        <Grid md={12} sm={6} item>
            <Box bgcolor={ 'primary.light' } p={2}>Item 2</Box>
        </Grid>
        <Grid md={12} sm={6} item>
            <Box bgcolor={ 'primary.light' } p={2}>Item 3</Box>
        </Grid>
        <Grid md={12} sm={6} item>
            <Box bgcolor={ 'primary.light' } p={2}>Item 4</Box>
        </Grid>
    </Grid>
  )
}

export default MuiGrid