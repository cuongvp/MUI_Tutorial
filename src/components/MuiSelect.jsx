import React, { useState } from 'react'
import { Stack, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material'
function MuiSelect() {
    const [age, setAge] = useState(10)
    const [countries, setCountries] = useState(['VIE'])
    const handleChange = (event) => {
        setAge(event.target.value)
    }

    const handleChangeCountries = (event) => {
        const value = event.target.value;

        setCountries(
            typeof value === 'string' ? value.split(',') : value
        )
    }
  return (
    <Stack margin={5}>
        <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        <Box margin={5}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Countries</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={countries}
                label="Countries"
                multiple
                onChange={handleChangeCountries}
                >
                    <MenuItem value='IND'>India</MenuItem>
                    <MenuItem value='VIE'>Vietnam</MenuItem>
                    <MenuItem value='USA'>US</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </Stack>
   
  )
}

export default MuiSelect