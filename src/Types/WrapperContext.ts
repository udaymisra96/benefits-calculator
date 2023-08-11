import { FormData } from './FormData';
import { ITheme } from '../Assets/styleController';

export interface WrapperContext {
  locale: string;
  setLocale: (locale: string) => void;
  selectLanguage: (event: Event) => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<'default' | 'twoOneOne'>>;
  styleOverride: any;
}