import {Control, Controller} from "react-hook-form";
import {Group, Radio} from "@mantine/core";
import React from "react";

interface YesOrNoRadioProps {
    name: string,
    label: string,
    control: Control
}

export default function YesOrNoRadio({name, label, control}: YesOrNoRadioProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <Radio.Group
                    label={label}
                    {...field}
                >
                    <Group>
                        <Radio value="yes" label="Yes"/>
                        <Radio value="no" label="No"/>
                    </Group>
                </Radio.Group>
            )}
        />)
}
