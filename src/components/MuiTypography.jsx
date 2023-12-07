import React from 'react'
import Typograhy from '@mui/material/Typography'
function MuiTypography() {
  return (
    <div>
        <Typograhy variant='h1'>Hello World</Typograhy>
        <Typograhy variant='h2'>Hello World</Typograhy>
        <Typograhy variant='h3'>Hello World</Typograhy>
        <Typograhy variant='h4' component="h1">Hello World</Typograhy>
        <Typograhy variant='h5'>Hello World</Typograhy>
        <Typograhy variant='h6'>Hello World</Typograhy>

        <Typograhy variant='subtitle1'>Hello World</Typograhy>
        <Typograhy variant='subtitle2'>Hello World</Typograhy>

        <Typograhy variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet atque nemo, voluptates repellat, culpa delectus asperiores magni voluptatem molestias quam est dignissimos? Praesentium, laboriosam blanditiis aut officia perferendis quod?
        </Typograhy>
        <Typograhy variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem dicta quaerat, reprehenderit in placeat repellendus cumque excepturi eius molestias impedit illum ratione pariatur iste dolore eligendi expedita. Fuga, natus neque!
        </Typograhy>
    </div>
  )
}

export default MuiTypography