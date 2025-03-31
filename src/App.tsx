import reactLogo from './assets/react.svg'
import electronLogo from './assets/electronjs.svg'
import typescriptLogo from './assets/typescript.svg'
import tailwindLogo from './assets/tailwind.svg'
import shadcnLogo from './assets/shadcn.svg'
import lucideLogo from './assets/lucide.svg'
import viteLogo from '/vite.svg'
import { Moon, Sun } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { useState } from 'react'

const technologies = [
  {name:'ElectronJS',logo:electronLogo,url:'https://www.electronjs.org/'},
  {name:'reactJS',logo:reactLogo,url:'https://react.dev/'},
  {name:'TypeScript',logo:typescriptLogo,url:'https://www.typescriptlang.org/'},
  {name:'Vite',logo:viteLogo,url:'https://vite.dev/'},
  {name:'TailwindCSS',logo:tailwindLogo,url:'https://tailwindcss.com/'},
  {name:'ShadcnUI',logo:shadcnLogo,url:'https://ui.shadcn.com/'},
  {name:'Lucide icons',logo:lucideLogo,url:'https://lucide.dev/'},
]

function App() {

  const [dark,setDark] = useState(false)

  const switchDarkMode = ()=>{
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <Button size='icon' variant='outline' className='absolute top-4 right-4' onClick={switchDarkMode}>
        {
          dark ? <Sun/> : <Moon/>
        }
      </Button>
      <Card className='min-w-200 max-w-400'>
        <CardHeader>
          <CardTitle>Electron + Vite + React + TS + Tailwind CSS + Shadcn + Lucide</CardTitle>
          <CardDescription>This project is a minimal template of electron project + reactJS + TypeScript + Vite + TailwindCSS + shadcnUI + Lucide icons</CardDescription>
        </CardHeader>
        <div className='grid grid-cols-4 gap-20 p-4'>
          {
            technologies.map((technology,index)=>(
              <a href={technology.url} key={index} className='w-full ratio-[1/1] flex flex-col items-center gap-2'>
                <img src={technology.logo} alt={technology.name} className='w-20 h-20'/>
                <p>{technology.name}</p>
              </a>
            ))
          }
        </div>
        <CardFooter>
          <p>The perfect template to build your desktop applications</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
