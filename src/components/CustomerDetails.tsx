import {Box, Button, Flex, Group, Input, NativeSelect, NumberInput, PinInput, Stack, Text} from "@mantine/core";
import {IMaskInput} from "react-imask";
import {Controller, FieldValues, useForm} from "react-hook-form";
import MySelect from "./MySelect";
import MyTextInput from "./MyTextInput";
import MyDatePicker from "./MyDatePicker";
import CustomTitle from "./CustomTitle";
import YesOrNoRadio from "./YesOrNoRadio";
import HiddenComponent from "./HiddenComponent";
import MyNumberInput from "./MyNumberInput";

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

const initialValues = {
    title: '',
    surname: '',
    firstName: '',
    middleName: '',
    dateOfBirth: '',
    taxFileNumber: '',
    address: '',
    state: '',
    postCode: '',
    doYouOwnThisProperty: 'no',
    marketValue: 0,
    loan: 0
};


export default function CustomerDetails() {
    const {register, handleSubmit, control, unregister, watch} = useForm()
    const onSubmit = (value: FieldValues) => console.log(value)

    return (
        <>
            <Box sx={{
                position: "fixed",
                left: "4em",
                top: "4em"
            }}>
                <Button onClick={handleSubmit(onSubmit)}>TEST</Button>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack>
                    <Group>
                        <MySelect
                            data={titles}
                            label="Title"
                            name="title"
                            required
                            register={register}
                        />
                        <HiddenComponent condition={watch("title") === "other"}>
                            <CustomTitle register={register} unregister={unregister}/>
                        </HiddenComponent>
                    </Group>
                    <MyTextInput
                        label="Surname"
                        name="surname"
                        register={register}
                        required
                    />
                    <MyTextInput
                        label="First Name"
                        name="firstName"
                        register={register}
                        required
                    />
                    <MyTextInput
                        label="Middle Name[s]"
                        name="middleName"
                        register={register}
                    />
                    <MyDatePicker label="Date of Birth" required name="dateOfBirth" register={register}/>
                    <Flex justify="space-between" align="flex-end">
                        <Controller
                            name="taxFileNumber"
                            control={control}
                            render={({field}) => (
                                <Input.Wrapper
                                    label="Tax File Number"
                                    withAsterisk
                                >
                                    <PinInput
                                        length={9}
                                        type="number"
                                        aria-label="tax file number"
                                        {...field}
                                    />
                                </Input.Wrapper>
                            )}
                        />
                        {/*<Button>Reset Tin</Button>*/}
                    </Flex>
                    <MyTextInput
                        label="Address"
                        name="address"
                        required
                        register={register}
                    />
                    <Group position="apart">
                        <NativeSelect
                            data={states}
                            label="State"
                            withAsterisk
                            {...register("state", {required: true})}
                        />
                        <Controller
                            name="postCode"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => (
                                <NumberInput
                                    label="Post Code"
                                    withAsterisk
                                    hideControls
                                    {...field}
                                />
                            )}
                        />
                    </Group>
                    <YesOrNoRadio name="ownProperty" label="Do you own this property" control={control}/>
                    <HiddenComponent condition={watch("ownProperty") === "yes"}>
                        <Flex justify="space-between">
                            <Text>If so:</Text>
                            <MyNumberInput
                                name="marketValue"
                                control={control}
                                label="Market Value"
                                defaultValue={0}
                                formatter={formatterFunction}
                                parser={parserFunction}
                                precision={2}
                                required
                            />
                            <MyNumberInput
                                name="loan"
                                control={control}
                                label="Loan"
                                defaultValue={0}
                                formatter={formatterFunction}
                                parser={parserFunction}
                                precision={2}
                                required
                            />
                        </Flex>
                    </HiddenComponent>
                    <YesOrNoRadio
                        name="anotherProperty"
                        label="Are you thinking of another property for rental or owner occupied or renovating?"
                        control={control}
                    />
                    <YesOrNoRadio
                        name="bestInterest"
                        label="Is your interest rate the best available?"
                        control={control}
                    />
                    <YesOrNoRadio
                        name="loanFix"
                        label="Have you considered fixing your loan?"
                        control={control}
                    />
                    <YesOrNoRadio
                        name="correctLoanStructure"
                        label="Are you sure your loan structure is correct and you are claiming the maximum interest deductions?"
                        control={control}
                    />
                    <YesOrNoRadio
                        name="freeLoanReview"
                        label="Would you like our Mortgage Consultant to contact you for a FREE review of your loans"
                        control={control}
                    />
                    <MyTextInput
                        label="Address [Postal]"
                        name="postalAddress"
                        register={register}
                        required
                    />
                    <Group position="apart">
                        <NativeSelect
                            data={states}
                            label="State"
                            withAsterisk
                            {...register("postalState")}
                        />
                        <Controller
                            name="postalPostCode"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => (
                                <NumberInput
                                    label="Post Code"
                                    withAsterisk
                                    hideControls
                                    {...field}
                                />
                            )}
                        />
                    </Group>
                    <Controller
                        control={control}
                        name="mobileNumber"
                        rules={{required: true}}
                        render={({field}) => (
                            <Input.Wrapper
                                label="Mobile Number"
                            >
                                <Input<any>
                                    component={IMaskInput}
                                    mask="+61 (000) 000 000"
                                    {...field}
                                />
                            </Input.Wrapper>
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        rules={{required: true}}
                        render={({field}) => (
                            <Input.Wrapper
                                label="Email Address"
                            >
                                <Input
                                    type="email"
                                    {...field}
                                />
                            </Input.Wrapper>
                        )}
                    />
                </Stack>
            </form>
        </>
    )
}
