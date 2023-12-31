export type ThemeDirection = 'ltr' | 'rtl';
export type ThemeMode = 'light' | 'dark' | 'auto';
export type MenuOrientation = 'vertical' | 'horizontal';

export type FontFamily =
  | `Inter var`
  | `'Inter', sans-serif`
  | `'Poppins', sans-serif`
  | `'Roboto', sans-serif`
  | `'Public Sans', sans-serif`;
export type PresetColor = 'default' | 'theme1' | 'theme2' | 'theme3' | 'theme4' | 'theme5' | 'theme6' | 'theme7' | 'theme8';
export type I18n = 'en' | 'fr' | 'ro' | 'zh'; // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese

export const LAYOUT_CONST = {
  VERTICAL_LAYOUT: 'vertical',
  HORIZONTAL_LAYOUT: 'horizontal'
};

// ==============================|| TYPES - CONFIG ||============================== //

export type CustomizationActionProps = {
  type: string;
  payload?: CustomizationProps;
};

export type DefaultConfigProps = {
  /**
   * The props used for the theme font-style.
   * We provide static below options -
   * `'Inter', sans-serif`
   * `'Poppins', sans-serif`
   * `'Roboto', sans-serif`
   * `'Public Sans', sans-serif` (default)
   */
  fontFamily: FontFamily;

  /**
   * the props used for menu orientation (diffrent theme layout).
   * we provide static below options -
   * 'vertical' (default)
   * 'horizontal'
   */
  menuOrientation: MenuOrientation;

  /**
   * the props used for show/hide caption drawer
   * default - true
   * false - will hide menu caption
   */
  menuCaption: boolean;

  /**
   * the props used for show mini variant drawer
   * the mini variant is recommended for apps sections that need quick selection access alongside content.
   * default - false
   */
  miniDrawer: boolean;

  /**
   * the props used for theme container.
   * the container centers your content horizontally. It's the most basic layout element.
   * default - true which show container
   * false - will show fluid
   */
  container: boolean;

  /**
   * the props used for default theme palette mode
   * explore the default theme
   * below theme options -
   * 'light' (default)
   * 'dark'
   */
  mode: ThemeMode;

  /**
   * the props used for theme primary color variants
   * we provide static below options thoe s are already defaine in src/themes/theme -
   * 'default'
   * 'theme1'
   * 'theme2'
   * 'theme3'
   * 'theme4'
   * 'theme5'
   * 'theme6'
   * 'theme7'
   * 'theme8'
   */
  presetColor: PresetColor;

  /**
   * the props used for default theme direction
   * explore the default theme
   * below theme options -
   * 'ltr' (default)
   * 'rtl'
   */
  themeDirection: ThemeDirection;

  /**
   * the props used for theme contrast.
   * set box-shadow .
   * default - false which show card without box-shadow and background default
   * true - will show card with box-shadow and background pure white
   */
  themeContrast: boolean;
};

export type CustomizationProps = {
  fontFamily: FontFamily;
  miniDrawer: boolean;
  container: boolean;
  menuOrientation: MenuOrientation;
  menuCaption: boolean;
  mode: ThemeMode;
  presetColor: PresetColor;
  themeDirection: ThemeDirection;
  themeContrast: boolean;
  onChangeContainer: VoidFunction;
  onChangeLocalization: (lang: I18n) => void;
  onChangeMode: (mode: ThemeMode) => void;
  onChangePresetColor: (theme: PresetColor) => void;
  onChangeDirection: (direction: ThemeDirection) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeMenuOrientation: (menuOrientation: MenuOrientation) => void;
  onChangeMenuCaption: VoidFunction;
  onChangeFontFamily: (fontFamily: FontFamily) => void;
  onChangeContrast: VoidFunction;
};
