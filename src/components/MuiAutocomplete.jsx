import React, { useState } from 'react'
import { Stack, Autocomplete, TextField} from '@mui/material'

const ListSkills = ['HTML', 'CSS', 'JS']
function MuiAutocomplete() {
    const [value, setValue] = useState(ListSkills[0])
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
   <Stack margin={10} width={150}>
        <Autocomplete 
            options={ListSkills}
            freeSolo
            value={value}
            onChange={handleChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => <TextField {...params} label="Skills" size='small' />}
        />
   </Stack>
  )
}

export default MuiAutocomplete