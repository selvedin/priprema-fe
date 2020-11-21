import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { IPriprema } from 'types/Priprema';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  leftCol: {
    backgroundColor: '#e7e1d1',
    width: '30%',
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: 1
  },
  rightCol: {
    width: '50%',
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PdfDocument = ({ priprema }: { priprema: IPriprema }) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftCol}><Text>{priprema._id}</Text></View>
        <View style={styles.rightCol}><Text>{priprema.nastavnik}</Text></View>
      </Page>
    </Document>
  )
}

export default PdfDocument

