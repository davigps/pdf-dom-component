import { View, Text } from 'react-native';

export interface RenderPdfProps {
  pdfUrl: string;
}

export function RenderPdf({ pdfUrl }: RenderPdfProps) {
  return (
    <View>
      <Text>{pdfUrl}</Text>
    </View>
  );
}
