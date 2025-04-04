'use dom';

import { StyleProp, ViewStyle } from 'react-native';

export type RenderPdfProps = {
  pdfUrl: string;
  dom?: {
    style?: StyleProp<ViewStyle>;
    [key: string]: any;
  };
}

export default function RenderPdf({ pdfUrl }: RenderPdfProps) {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}>
      <iframe src={pdfUrl} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
