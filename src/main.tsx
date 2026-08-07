
# src/main.tsx
main_tsx = '''import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)'''

with open(f'{base_dir}/src/main.tsx', 'w') as f:
    f.write(main_tsx)

# src/vite-env.d.ts
vite_env = '''/// <reference types="vite/client" />'''

with open(f'{base_dir}/src/vite-env.d.ts', 'w') as f:
    f.write(vite_env)

print("main.tsx & vite-env.d.ts created!")
