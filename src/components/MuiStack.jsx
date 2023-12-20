import React from 'react'
import {Stack, Divider } from '@mui/material'
function MuiStack() {
  return (
    <Stack sx={{border: '1px solid'}} direction='row' spacing={2}
        divider={<Divider orientation='vertical' flexItem/>}
    >
        <Stack
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
        </Stack>
        <Stack
            sx={{
                backgroundColor: 'success.light',
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
        </Stack>
    </Stack>
    
  )
}

export default MuiStack