import React from 'react'
import { Footer, LinksBtn, Profile } from '../components'
import"./linktree.css"
export default function Linktree() {
  return (
    <div className='container'>
      <div >
        <Profile />
        <LinksBtn />
      </div>
      <Footer />
    </div>
  );
}
