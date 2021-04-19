import React from 'react'
import styled from '@emotion/styled'

const StyledLogo = styled.svg`
  ${(props) => (props.color ? `fill: ${props.color};` : '')}
  ${(props) => (props.witdh ? `width: ${props.witdh};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
`

const Logo = (props) => {
  return (
    <StyledLogo
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1150 515.12"
    >
      <path d="M1117.09,34.74c-3.16,8.79-7.49,17.42-11.88,26.05q-6.86,11.88-13.72,23.77,8.92-8.91,17.83-17.83C1130.89,51.08,1143,24.89,1150,0,1139.12,6.31,1124.33,24.05,1117.09,34.74Z" />
      <path d="M575,515.12c5.38-18.53,20.27-30.15,35.66-38.39,5.24-2.54,14.68-9.3,14.62-14.63,0-4.12-4.82-13.06-2.28-22.4,3-9.89,15.42-23.44,19.19-32-.53-3.67-4.22-12.95-6.85-24.68-1.85-8.22-3.6-18.34-4.12-21.94,2.1,3.21,4.92,12.21,9.37,20.77,5.1,10.84,12.06,20.61,18.51,24.93,1.6-2.48,7.38-15.79,9.6-22.39,2.59-9.32,4-19.53,5.49-30.17a264.14,264.14,0,0,0,10,26c2.14,6.2,12,22.21,18.74,27.43,2.71-7.61,5.36-15.12,7.77-22.86,1.7-5.43,2.88-11.11,4.57-16.45,2,3.53,11.29,14.13,16.46,18.28A72.18,72.18,0,0,0,751.43,399c1.67-6.82,3.93-26.41,3.66-38.85,21.82,13.64,43.5,31,69,44.34-2.6-38.73-11.31-75.1-24.23-100.56l.46-.45C824.86,313.66,870.47,316,905,309c-2.62-3.36-13.44-15.69-25-23.11A80.69,80.69,0,0,0,852.45,271c20.13-4.26,40.07-9.9,59.87-15.08,12.77-4.24,28.53-9.26,41.14-14.17a127,127,0,0,0,27.42-15.08c15.35-11.38,31.07-30.36,37-38.4-21.18-1-44.65-1.34-62.17-2.28,12.22-9.86,36.24-28.33,48.91-39.77,21.75-17.39,50.87-45.45,71.76-68.56,6.69-7.68,19.47-24.78,23.77-33.82,4.36-6.27,10.07-16.47,14.17-23.77-37.86,16.16-75.24,32.15-112.44,46.62-26.19,9.61-52,18.67-78.17,27,.59-4.35,2.31-13.42,2.75-20.62-16.66,4-26.49,9.42-41.59,14.63-43.18,15.2-91.51,32.42-129.35,44.79,2.43-3.47,6.16-7.3,10.51-12.8-14,3.5-22.67,10.2-32.91,14.63-5.51,1.67-13,5-25.6,7.31-11,2.2-21.8,5-28.79,7.77a50.77,50.77,0,0,0-6.4-6.4c-5.84,1.39-25.49,10.21-32.91,12.34-4.65-8.24-23-29.45-30.62-37.93-2.73-4.66-4.56-9.52-7.77-16.46-1.94-2-4-5.16-6.86-6.4-1.35-5.8-13.61-25.78-19.2-31.53h0c-5.59,5.75-17.85,25.73-19.2,31.53-2.84,1.24-4.92,4.41-6.86,6.4-3.21,6.94-5,11.8-7.77,16.46-7.63,8.48-26,29.69-30.62,37.93-7.42-2.13-27.07-11-32.91-12.34a50.77,50.77,0,0,0-6.4,6.4c-7-2.77-17.79-5.57-28.79-7.77-12.56-2.35-20.09-5.64-25.6-7.31C406.61,130,398,123.25,383.94,119.75c4.35,5.5,8.08,9.33,10.51,12.8C356.61,120.18,308.28,103,265.1,87.76c-15.1-5.21-24.93-10.6-41.59-14.63.44,7.2,2.16,16.27,2.75,20.62-26.13-8.35-52-17.41-78.17-27C110.89,52.26,73.51,36.27,35.65,20.11c4.1,7.3,9.81,17.5,14.17,23.77,4.3,9,17.08,26.14,23.77,33.82,20.89,23.11,50,51.17,71.76,68.56C158,157.7,182,176.17,194.26,186c-17.52.94-41,1.25-62.17,2.28,6,8,21.68,27,37,38.4a127,127,0,0,0,27.42,15.08c12.61,4.91,28.37,9.93,41.14,14.17,19.8,5.18,39.74,10.82,59.87,15.08A80.69,80.69,0,0,0,270,285.87c-11.55,7.42-22.37,19.75-25,23.11,34.54,7,80.15,4.68,104.67-5.48l.46.45c-12.92,25.46-21.63,61.83-24.23,100.56,25.52-13.37,47.2-30.7,69-44.34-.27,12.44,2,32,3.66,38.85a72.18,72.18,0,0,0,19.65-12.34c5.17-4.15,14.41-14.75,16.46-18.28,1.69,5.34,2.87,11,4.57,16.45,2.41,7.74,5.06,15.25,7.77,22.86,6.72-5.22,16.6-21.23,18.74-27.43a264.14,264.14,0,0,0,10.05-26c1.49,10.64,2.9,20.85,5.49,30.17,2.22,6.6,8,19.91,9.6,22.39,6.45-4.32,13.41-14.09,18.51-24.93,4.45-8.56,7.27-17.56,9.37-20.77-.52,3.6-2.27,13.72-4.12,21.94-2.63,11.73-6.32,21-6.85,24.68,3.77,8.55,16.17,22.1,19.19,32,2.54,9.34-2.24,18.28-2.28,22.4-.06,5.33,9.38,12.09,14.62,14.63,15.39,8.24,30.28,19.86,35.66,38.39" />
      <path d="M977.68,52.56c19.69-4.87,48.74-20.37,57.14-27.88-8,1-15.85,2.9-23.77,4.12-20.07,5.07-43.7,13.61-58,25.13h.92C960.51,55.06,972.3,53.92,977.68,52.56Z" />
      <path d="M952.55,27.42C944.68,33.82,939,40.84,932,47.08c-6.81,5-15.21,7.82-21.94,13.71C933.35,60.75,945.56,44.45,952.55,27.42Z" />
      <path d="M1106.58,97.81c-25,11.72-39.82,21-60.79,34.74,9-1.41,22.57-7.1,34.74-14.17C1091.69,111.89,1101.67,104.23,1106.58,97.81Z" />
      <path d="M1023.85,148.55c-11.58,6.17-33.26,24.24-42.51,32.91,37.7-2.27,69.85-20.85,87.76-36.11,7.46-6.23,16.32-13.94,21.48-21-10,4.35-20.42,8.54-30.62,12.8C1047.92,140.93,1038.82,143.76,1023.85,148.55Z" />
      <path d="M1053.1,234c-10.52,1.33-31.93,3.33-48,4.11a278.49,278.49,0,0,0-49.37,9.6c-10.08,2.85-35.57,9.93-43.42,13.26,60.9,3.32,110.75-4.25,153.58-21,13.64-5.34,33.76-13.45,41.59-19.65l-27,8.23Z" />
      <path d="M984.08,309c-14.9-9.09-28.7-21-45.25-28.34-11.08-3.53-37.43-10.51-43.87-11.4,2.4,3.48,14.38,17.37,20.11,20.54,18.42,13.73,38.61,21.23,64,27.88,7.45,2,27.48,6.8,37.93,6.4h-.91Z" />
      <path d="M165.92,309l-32,15.08H133c10.45.4,30.48-4.44,37.93-6.4,25.38-6.65,45.57-14.15,64-27.88,5.73-3.17,17.71-17.06,20.11-20.54-6.44.89-32.79,7.87-43.87,11.4C194.62,288,180.82,299.89,165.92,309Z" />
      <path d="M44.79,60.79c-4.39-8.63-8.72-17.26-11.88-26C25.67,24.05,10.88,6.31,0,0,7,24.89,19.11,51.08,40.68,66.73L58.51,84.56Q51.64,72.68,44.79,60.79Z" />
      <path d="M139,28.8c-7.92-1.22-15.81-3.16-23.77-4.12,8.4,7.51,37.45,23,57.14,27.88,5.38,1.36,17.17,2.5,23.76,1.37H197C182.65,42.41,159,33.87,139,28.8Z" />
      <path d="M218,47.08c-7-6.24-12.7-13.26-20.56-19.66,7,17,19.19,33.33,42.5,33.37C233.23,54.9,224.83,52.05,218,47.08Z" />
      <path d="M43.42,97.81c4.91,6.42,14.89,14.08,26.05,20.57,12.17,7.07,25.7,12.76,34.74,14.17C83.24,118.77,68.38,109.53,43.42,97.81Z" />
      <path d="M126.15,148.55c-15-4.79-24.07-7.62-36.11-11.43-10.2-4.26-20.62-8.45-30.62-12.8,5.16,7.09,14,14.8,21.48,21,17.91,15.26,50.06,33.84,87.76,36.11C159.41,172.79,137.73,154.72,126.15,148.55Z" />
      <path d="M194.26,247.73a278.49,278.49,0,0,0-49.37-9.6c-16.06-.78-37.47-2.78-48-4.11l-27.43-5.48-27-8.23c7.83,6.2,27.95,14.31,41.59,19.65,42.83,16.78,92.68,24.35,153.58,21C229.83,257.66,204.34,250.58,194.26,247.73Z" />
    </StyledLogo>
  )
}

export default Logo