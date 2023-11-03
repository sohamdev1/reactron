import * as React from 'react';
import { useTheme } from 'styled-components';

export const Logo = ({
  logoUpperFill,
  logoLowerFill,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  logoUpperFill?: string;
  logoLowerFill?: string;
}) => {
  const theme = useTheme();
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M126.941 82.192a5.378 5.378 0 00-5.38-5.376 5.378 5.378 0 00-5.38 5.376V157.2h-9.736v-41.728a5.378 5.378 0 00-5.38-5.376 5.378 5.378 0 00-5.38 5.376V157.2H85.95v-32.512a5.378 5.378 0 00-5.38-5.376 5.378 5.378 0 00-5.38 5.376V157.2h-9.736v-42.752a5.378 5.378 0 00-5.38-5.376 5.378 5.378 0 00-5.38 5.376V157.2H44.96v-37.376a5.378 5.378 0 00-5.38-5.376 5.378 5.378 0 00-5.38 5.376V157.2h-9.223v-37.12a6.146 6.146 0 00-6.149-6.144 6.147 6.147 0 00-6.149 6.144v49.408h156.535V120.08a6.147 6.147 0 00-6.149-6.144 6.146 6.146 0 00-6.148 6.144v37.12h-9.479v-45.312a5.378 5.378 0 00-5.381-5.376 5.378 5.378 0 00-5.38 5.376V157.2h-9.735V82.192z"
        fill={logoLowerFill ? logoLowerFill : theme.colors.primary[1]}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.94 10v84.007a47.212 47.212 0 01-6.675-.605 5.376 5.376 0 00-1.776 10.604c4.441.744 12.864 1.489 21.092-.604 8.427-2.144 17.223-7.49 20.458-19.13 2.413-8.68 5.977-10.36 7.386-10.407 1.643-.055 5.887 1.666 10.208 11.188 2.453 5.406 5.254 9.984 8.558 13.026 3.46 3.187 7.983 5.064 13.01 3.526 4.49-1.375 8.1-5.14 11.096-9.767 3.089-4.77 6.057-11.284 8.944-19.514 2.678-7.632 5.66-12.737 8.535-15.862 2.824-3.07 5.313-4.01 7.31-4.047 2.065-.039 4.66.87 7.66 3.568 3.007 2.705 6.118 6.96 8.996 12.831 6.167 12.582 11.393 21.301 16.965 26.851 1.434 1.429 2.887 2.643 4.37 3.663.42.358.888.662 1.395.897 4.256 2.553 8.786 3.599 13.865 3.599a5.376 5.376 0 000-10.752c-1.873 0-3.55-.19-5.129-.655V10H12.939zm143.98 71.284V22.288H25.227v70c4.923-1.75 8.813-4.995 10.453-10.896 2.711-9.752 8.488-17.976 17.386-18.273 8.662-.29 15.69 7.205 20.358 17.492 2.223 4.898 4.305 7.952 6.05 9.558 1.584 1.46 2.274 1.248 2.58 1.155.843-.258 2.686-1.42 5.218-5.33 2.44-3.766 5.075-9.396 7.824-17.23 2.958-8.432 6.558-15.007 10.768-19.582 4.261-4.63 9.362-7.41 15.019-7.517 5.589-.105 10.712 2.419 15.053 6.324 4.335 3.9 8.189 9.42 11.46 16.093 3.642 7.43 6.734 13.015 9.524 17.202z"
        fill={logoUpperFill ? logoUpperFill : theme.colors.text1}
      />
    </svg>
  );
};
