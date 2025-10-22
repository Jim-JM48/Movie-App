import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

export default function Footer() {
  return (
    <footer className="bg-teal-700 py-4 text-stone-900 col-span-12">
      <div className="flex items-center flex-col gap-2">
          <div className="flex space-x-4 border-b">
            <h2 className="text-xl font-bold mb-1">Movies</h2>
            <span className="hover:text-white"><LinkedInIcon/></span>
            <span className="hover:text-white"><GitHubIcon/></span>
            <span className="hover:text-white"><XIcon/></span>
          </div>
          <p className='text-sm'>© 2025 . All rights reserved.</p>
      </div>
    </footer>
  )
}
