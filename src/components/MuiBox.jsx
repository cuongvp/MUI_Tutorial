import React from 'react'
import {Box} from '@mui/material'
function MuiBox() {
  return (
    <Box
        margin={20}
        sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            width: '100px',
            height: '100px',
            padding: '16px',
            '&:hover': {
                backgroundColor: 'primary.light'
            }
        }}
    >
        Hello
    </Box>
  )
}

export default MuiBox