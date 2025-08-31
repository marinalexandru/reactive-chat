import { useFonts } from 'expo-font';
import { appFonts } from '../theme/fonts';

export function useAppFonts() {
  const [fontsLoaded, error] = useFonts(appFonts);
  return { fontsLoaded, error };
}
