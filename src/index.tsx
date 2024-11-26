
import { createRoot } from 'react-dom/client'

import { Root } from './root'

// @ts-expect-error
import './index.css'

const root = document.getElementById('root');
if(root) {
  createRoot(root).render(<Root />)
}
