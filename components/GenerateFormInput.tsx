import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const GenerateFormInput = () => {
  return (
    <div className=' flex items-center gap-4 my-10'>
      <Input type='text' placeholder='Write a prompt to generate form...'></Input>
      <Button>Generate Form</Button>
    </div>
  )
}

export default GenerateFormInput
