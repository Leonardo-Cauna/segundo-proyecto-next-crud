import Link from "next/link"

export default function NotFound (){
return(
    <section className="container flex h-[calc(100vh-15vh)] justify-center items-center">
        <div>
            <h1 className="text-4xl font-bold">Page Not Found</h1>
            <Link href="/">
                <div className='bg-slate-900 text-center m-auto hover:bg-slate-800 hover:cursor-pointer'>
                    <h3 className='font-bold text-lg mb-2'>Go Back To Main Page</h3>
                </div>
            </Link>
        </div>
    </section>
)}