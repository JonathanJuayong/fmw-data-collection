import {FieldValues, UseFormRegister, UseFormUnregister} from "react-hook-form";
import React, {useEffect} from "react";
import {TextInput} from "@mantine/core";

interface CustomTitleProps {
    register: UseFormRegister<FieldValues>
    unregister: UseFormUnregister<FieldValues>
}

export default function CustomTitle({register, unregister}: CustomTitleProps) {
    useEffect(() => {
        return () => {
            unregister("customTitle")
        };
    }, []);

    return (
        <TextInput
            label="Other title"
            withAsterisk
            {...register("customTitle", {required: true})}
        />
    )
}
