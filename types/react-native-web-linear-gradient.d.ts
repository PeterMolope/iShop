declare module 'react-native-web-linear-gradient' {
  import { ViewProps } from 'react-native';
  
  export interface LinearGradientProps extends ViewProps {
    colors: string[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    locations?: number[];
    useAngle?: boolean;
    angle?: number;
    angleCenter?: { x: number; y: number };
  }
  
  export default class LinearGradient extends React.Component<LinearGradientProps> {}
}
