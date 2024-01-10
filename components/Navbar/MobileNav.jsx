import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import NavContent from './NavContent'
import Logo from '../Essentials/Logo'
import ThemeToggler from '../Themes/ThemeToggler'
import Socials from '../Essentials/Socials'



const MobileNav = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
        <div className='flex flex-col items-center gap-y-32'>
        <Logo/>
        <NavContent containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-2xl'/>
        <ThemeToggler/>
        </div>
        <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl'/>
        </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav