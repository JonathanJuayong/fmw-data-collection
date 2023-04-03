import {FieldValues, UseFormRegister} from "react-hook-form";
import {Input} from "@mantine/core";
import React from "react";

interface MyDatePickerProps {
    label: string,
    name: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>
}

export default function MyDatePicker({label, name, required, register}: MyDatePickerProps) {
    return (
        <Input.Wrapper
            label={label}
            withAsterisk={required}
        >
            <Input
                component="input"
                type="date"
                {...register(name, {required})}
            />
        </Input.Wrapper>
    )
}
