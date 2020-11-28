import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { IPriprema } from 'types/Priprema';
import { styles } from './styles'


const PdfDocument = ({ priprema }: { priprema: IPriprema }) => {
  return (
    <Document>
      <Page size="A4">
        <Text>{priprema._id}</Text>
        <Text>{priprema.nastavnik}</Text>
        <View><Text>{priprema.uvodniSadrzaj}</Text></View>
      </Page>
    </Document>
  )
}

export default PdfDocument

