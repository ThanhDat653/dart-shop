import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
   label?: string
   id: string
   type: 'search' | 'text-field'
   required?: boolean
   register?: UseFormRegister<FieldValues>
   errors?: FieldErrors
   disabled?: boolean
   placeholder?: string
   value?: string
   onChange?: () => {}
   onBlur?: () => {}
   width?: string
}

const CustomInput: React.FC<InputProps> = ({
   label,
   id,
   type,
   register,
   disabled,
   placeholder,
   value,
   onChange,
   onBlur,
   width = 'w-full',
}) => {
   return (
      <div className={width}>
         <label htmlFor={id} className="">
            {label}
         </label>
         <input type="text" id={id} className="" />
      </div>
   )
}

export default CustomInput
