import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (page: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    onClick={()=>setSelectedPage(SelectedPage.ABOUT)}
    href = {`#${SelectedPage.ABOUT}`} >
      {children}
    </AnchorLink>
  )
}

export default ActionButton