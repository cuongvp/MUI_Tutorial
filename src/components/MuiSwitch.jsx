import React, { useState } from 'react'
import {Box, FormControlLabel, Switch} from '@mui/material'
function MuiSwitch() {
   const [checked, setChecked] = useState(false)

   const handleChange = (event) => {
        setChecked(event.target.checked)
   }

  return (
    <Box margin={4}>
        <FormControlLabel labelPlacement='start' label="Dark Mode" control={<Switch checked = {checked} onChange={handleChange}/>}/>
    </Box>
  )
}

export default MuiSwitch