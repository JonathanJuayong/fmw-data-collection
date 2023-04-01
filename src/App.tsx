import {Box, MantineProvider} from '@mantine/core';
import Layout from "./components/Layout";
import FormCollection from "./components/FormCollection";

export default function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Box sx={{
                backgroundColor: "#cdcdcd"
            }}>
                <Layout>
                    <FormCollection/>
                </Layout>
            </Box>
        </MantineProvider>
    );
}
