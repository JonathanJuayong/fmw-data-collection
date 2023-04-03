import {FieldValues, UseFormRegister} from "react-hook-form";
import {NativeSelect} from "@mantine/core";
import React from "react";

interface SelectProps {
    data: Array<{ value: string, label: string }>
    label: string,
    name: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>
}

export default function MySelect({data, label, name, required, register}: SelectProps) {
    return <NativeSelect
        data={data}
        label={label}
        withAsterisk={required}
        {...register(name,{required})}
    />;
}
