import { RenderPdf } from 'pdf-dom-component';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <RenderPdf pdfUrl="https://pdfobject.com/pdf/sample.pdf" dom={{ 
        style: { flex: 1, borderWidth: 1, borderColor: 'yellow', width: '100%', height: '100%' },
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
}); 