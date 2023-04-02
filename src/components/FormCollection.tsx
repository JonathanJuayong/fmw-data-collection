import {Box, createStyles} from "@mantine/core";
import CustomerDetails from "./CustomerDetails";

const useStyles = createStyles((theme) => ({
    box: {
        backgroundColor: theme.colors.gray[0],
        minHeight: "100svh",
        padding: "2em",
        paddingBlock: "4em"
    }
}))


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
