import React from 'react'
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Controller } from 'react-hook-form'
import { Input } from './ui/input'

import { FieldValues, Control } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = ({control,name,label, placeholder , type="text"}: FormFieldProps<T>) => (
        <Controller name={name} control = {control} render={({ field }) => (
            <FormItem>
              <FormLabel className='label'>{label}</FormLabel>
              <FormControl>
                <Input className='input' placeholder={placeholder} type={type} {...field} />
              </FormControl>
                <FormDescription className='description'>This is a {label?.toLowerCase()} field</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />)
 
export default FormField