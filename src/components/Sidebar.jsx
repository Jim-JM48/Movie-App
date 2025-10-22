import { useContext } from "react";
import { NavLink } from "react-router";
import { CategoryContest } from "../contest/Categories";
import "../styles/Sidebar.css";


export default function Sidebar() {

  const Categories = useContext(CategoryContest);
  return (
    <div className='bg-neutral-900 col-span-2 vs:max-md:col-span-4 min-h-screen'>
        <div className="font-bold py-3 border-b-4 border-rose-700 text-2xl text-rose-600">
            <span className='px-6'>Movies</span>
        </div>
        <div className='px-6'>
          <h2 className='py-4 text-neutral-600 text-lg'>Categories</h2>
          <div id="genreList" className='flex flex-col space-y-2'>
            {Categories.map((categorie ,index) => {
              return (
                  <span key={index}  className='cursor-pointer w-fit hover:text-amber-300'>
                    <NavLink to={`/genres/${categorie}`}>{categorie}</NavLink>
                  </span>
              )
            })}
          </div>
        </div>
    </div>
  )
}
