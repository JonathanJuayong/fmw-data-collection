import {FieldValues, UseFormRegister} from "react-hook-form";
import {TextInput} from "@mantine/core";
import React from "react";

interface MyTextInputProps {
    label: string,
    name: string
    required?: boolean
    register: UseFormRegister<FieldValues>
}

export default function MyTextInput({label, name, required, register}: MyTextInputProps) {
    return <TextInput
        label={label}
        withAsterisk={required}
        {...register(name, {required})}
    />
}
