import {request} from '@/utils'

import { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    request.get('user/profile')
  }, [])

  return (
    <div className="container">
      <h1>Hello Layout</h1>
    </div>
  )
}


export default Layout;