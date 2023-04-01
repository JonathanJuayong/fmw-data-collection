import {Box, createStyles, Group, Input, NumberInput, PinInput, Radio, Select, Stack, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {IMaskInput} from "react-imask";

const useStyles = createStyles((theme) => ({
    box: {
        backgroundColor: theme.colors.gray[0],
        minHeight: "100svh",
        padding: "2em",
        paddingBlock: "4em"
    }
}))

const customerInfo = {
    title: "select",
    surname: "text input",
    middleNames: "text input",
    dob: "bday input",
    tfn: "number input",
    address: {
        line: "text",
        state: "text",
        postcode: "number"
    }
}

const titles = [
    {value: "mr", label: "Mr."},
    {value: "ms", label: "Ms."},
    {value: "mi", label: "Miss."},
    {value: "other", label: "Others, please specify"},
]

const states = [
    {value: "qld", label: "QLD"},
    {value: "nsw", label: "NSW"},
    {value: "act", label: "ACT"},
    {value: "wa", label: "WA"},
    {value: "vic", label: "VIC"},
    {value: "nt", label: "NT"},
    {value: "tas", label: "TAS"},
    {value: "sa", label: "SA"},
]

const parserFunction = (value: string) => value.replace(/\$\s?|(,*)/g, '')

const formatterFunction = (value: string) => !Number.isNaN(parseFloat(value))
    ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    : '$ '

function CustomerDetails() {
    const form = useForm({
        initialValues: {}
    })
    return (
        <Stack>
            <Select
                data={titles}
                label="Title"
                withAsterisk
            />
            <TextInput
                label="Surname"
                withAsterisk
            />
            <TextInput
                label="First Name"
                withAsterisk
            />
            <TextInput
                label="Middle Name[s]"
            />
            <Input.Wrapper
                label="Date of Birth"
                withAsterisk
            >
                <Input
                    component="input"
                    type="date"
                />
            </Input.Wrapper>
            <Group position="left">
                <Input.Wrapper
                    label="Tax File Number"
                    withAsterisk
                >
                    <PinInput length={9} type="number" aria-label="tax file number"/>
                </Input.Wrapper>
            </Group>
            <TextInput
                label="Address"
                withAsterisk
            />
            <Group position="apart">
                <Select
                    data={states}
                    label="State"
                    withAsterisk
                />
                <NumberInput
                    label="Post Code"
                    withAsterisk
                    hideControls
                />
            </Group>
            <Radio.Group
                name=""
                label="Do you own this property?"
            >
                <Group>
                    <Radio value="yes" label="Yes"/>
                    <Radio value="no" label="No"/>
                </Group>
            </Radio.Group>
            <NumberInput
                label="Market Value"
                defaultValue={0}
                formatter={formatterFunction}
                parser={parserFunction}
                precision={2}
            />
            <NumberInput
                label="Loan"
                defaultValue={0}
                formatter={formatterFunction}
                parser={parserFunction}
                precision={2}
            />
            <Radio.Group
                name=""
                label="Are you thinking of another property for rental or owner occupied or renovating?"
            >
                <Group>
                    <Radio value="yes" label="Yes"/>
                    <Radio value="no" label="No"/>
                </Group>
            </Radio.Group>
            <Radio.Group
                name=""
                label="Are you thinking of another property for rental or owner occupied or renovating?"
            >
                <Group>
                    <Radio value="yes" label="Yes"/>
                    <Radio value="no" label="No"/>
                </Group>
            </Radio.Group>
            <Radio.Group
                name=""
                label="Is your interest rate the best available?"
            >
                <Group>
                    <Radio value="yes" label="Yes"/>
                    <Radio value="no" label="No"/>
                </Group>
            </Radio.Group>
            <Radio.Group
                name=""
                label="Have you considered fixing your loan?"
            >
                <Group>
                    <Radio value="yes" label="Yes"/>
                    <Radio value="no" label="No"/>
                </Group>
            </Radio.Group>
            <Radio.Group
                name=""
                label="Are you sure your loan structure is correct and you are claiming the maximum interest deductions?"
            >
                <Group>
                    <Radio value="yes" label="Yes"/>
                    <Radio value="no" label="No"/>
                </Group>
            </Radio.Group>
            <Radio.Group
                name=""
                label="Would you like our Mortgage Consultant to contact you for a FREE review of your loans"
            >
                <Group>
                    <Radio value="yes" label="Yes"/>
                    <Radio value="no" label="No"/>
                </Group>
            </Radio.Group>
            <TextInput
                label="Address [Postal]"
                withAsterisk
            />
            <Group position="apart">
                <Select
                    data={states}
                    label="State"
                    withAsterisk
                />
                <NumberInput
                    label="Post Code"
                    withAsterisk
                    hideControls
                />
            </Group>
            <Input.Wrapper
                label="Mobile Number"
            >
                <Input<any>
                    component={IMaskInput}
                    mask="+61 (000) 000 000"
                />
            </Input.Wrapper>
            <Input.Wrapper
                label="Email Address"
            >
                <Input
                    type="email"
                />
            </Input.Wrapper>
        </Stack>
    )
}


interface FormCollectionProps {

}

export default function FormCollection({}: FormCollectionProps) {
    const {classes} = useStyles()
    return (
        <Box className={classes.box}>
            <CustomerDetails/>
        </Box>
    )
}
