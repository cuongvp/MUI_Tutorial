import React, { useState } from 'react'
import{
    Checkbox,
    Box,
    FormGroup,
    FormControlLabel,
    FormHelperText,
    FormControl,
    FormLabel
}
from '@mui/material'

function MuiCheckbox() {
    const [state, setState] = useState(
        {
            html: false,
            css: false,
            js: false
        }
    )
    const { html, css, js } = state;

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        })
    }

    const error = [html, css, js].filter((v) => v).length === 0;
    const text = error === true ? 'you must chose at least one' : 'great'
  return (
   <Box margin={10}>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" error={error}>
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                    <Checkbox checked={html} onChange={handleChange} name="html" />
                    }
                    label="HTML"
                />
                <FormControlLabel
                    control={
                    <Checkbox checked={css} onChange={handleChange} name="css" />
                    }
                    label="CSS"
                />
                <FormControlLabel
                    control={
                    <Checkbox checked={js} onChange={handleChange} name="js" />
                    }
                    label="JS"
                />
            </FormGroup>
            <FormHelperText>{ text }</FormHelperText>
        </FormControl>
   </Box>
  )
}

export default MuiCheckbox