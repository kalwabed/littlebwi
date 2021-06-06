import { Icon, IconProps } from '@chakra-ui/react'

export const InstagramIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <circle cx="128" cy="128" r="40" fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="16"></circle>
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="48"
        strokeWidth="16"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      ></rect>
      <circle cx="180" cy="75.99998" r="12"></circle>
    </Icon>
  )
}

export const GlobeIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <circle cx="128" cy="128" r="96" fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="16"></circle>
      <line
        x1="32"
        y1="128"
        x2="224"
        y2="128"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <ellipse
        cx="128"
        cy="128"
        rx="40"
        ry="93.42294"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        strokeWidth="16"
      ></ellipse>
    </Icon>
  )
}
