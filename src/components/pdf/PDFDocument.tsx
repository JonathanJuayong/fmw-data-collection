import {Document, Page, StyleSheet, Text} from "@react-pdf/renderer";
import {FormInterface} from "../interfaces/FormInterface";

interface PDFDocumentProps {
    formResponse: FormInterface
}

const styles = StyleSheet.create({
    page: {}
})

export default function PDFDocument({formResponse}: PDFDocumentProps) {
    const keys = Object.keys(formResponse)


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {keys.map(key => (
                    <Text key={key}>{`${key}: ${formResponse[key as keyof FormInterface]}`}</Text>
                ))}
            </Page>
        </Document>
    )
}
