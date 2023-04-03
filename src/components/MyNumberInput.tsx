import {Control, Controller} from "react-hook-form";
import {NumberInput} from "@mantine/core";
import React from "react";

interface MyNumberInputProps {
    control: Control
    name: string
    label: string
    required?: boolean
    defaultValue?: number
    precision?: number
    formatter?: (value: string) => string
    parser?: (value: string) => string
}

export default function MyNumberInput(
    {
        control,
        name,
        label,
        required,
        defaultValue = 0,
        precision = 0,
        formatter,
        parser
    }: MyNumberInputProps
) {
    return <Controller
        control={control}
        name={name}
        shouldUnregister
        rules={{required}}
        render={({field}) => (
            <NumberInput
                withAsterisk={required}
                label={label}
                defaultValue={defaultValue}
                formatter={formatter}
                parser={parser}
                precision={precision}
                {...field}
            />
        )}/>
}
