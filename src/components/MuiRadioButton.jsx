import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
}
from '@mui/material'
function MuiRadioButton() {
  return (
    <Box>
        <FormControl>
            <FormLabel id='job-experience-group-label'>
                Years of experiences
            </FormLabel>
            <RadioGroup
                name='job-experience-group'
                aria-labelledby='job-experience-group-label'
                row
            >
                <FormControlLabel control={<Radio color='secondary'/>} value='0-2' label='0-2'/>
                <FormControlLabel control={<Radio color='success'/>} value='3-5' label='3-5'/>
                <FormControlLabel control={<Radio color='error'/>} value='6-10' label='6-10'/>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton