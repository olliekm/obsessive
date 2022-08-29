import Head from 'next/head'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Link from 'next/link'
import Footer from '../components/Footer'
import CategoryButton from '../components/CategoryButton'

export default function Home() {
  return (
    <div className='h-auto'>
        <Head>
          <title>OBSESSIVE</title>
          <meta property="og:title" content="OBSESIVE"></meta>
          <meta property="og:site_name" content="OBESSIVE"></meta>
          <meta property="og:url" content="OBESSIVE.club"></meta>
          <meta property="og:description" content="A news website for hardcore hobbyists"></meta>
          <meta property="og:type" content=""></meta>
          <meta property="og:image" content=""></meta>
        </Head>
        <div className="flex flex-col items-center">
            <div className="w-full h-96 bg-black flex justify-center items-center relative overflow-hidden">
                <div className="text-4xl font-serif text-center text-white z-20">
                  <h1>OBESSIVE</h1>
                  <h1 className='text-lg'>Launching now</h1>
                </div>
                  <div className="z-10 absolute left-0 bg-gradient-to-r from-gray-700/0 via-black/50  to-black w-96 h-full">
                  </div>
                  <img className='absolute left-0 w-96' src="https://images.unsplash.com/photo-1590682029937-6ce4aff42bea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                  <div className="z-10 absolute right-0 bg-gradient-to-r from-black via-black/50  to-black/0 w-96 h-full">
                  </div>
                  <img className='absolute right-0 w-96' src="https://images.unsplash.com/photo-1611726579796-fd426e5e007d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            </div>
        </div>
        <div className="w-full flex justify-center p-10">
            <div className="lg:w-2/3 w-full flex-col justify-start">
              <h1 className='font-serif text-3xl mb-5'>Check out some categories:</h1>
              <div className="flex w-full gap-3 overflow-x-auto">
                <CategoryButton link={'setups'} title={'Setups'} img={'https://images.unsplash.com/photo-1658856201803-3b31a06efa4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'}/>
                <CategoryButton link={'audio'} title={'Audio'} img={'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}/>
                <CategoryButton link={'coffee'} title={'Coffee'} img={'https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'}/>
                <CategoryButton link={'cars'} title={'Cars'} img={'https://images.unsplash.com/photo-1607603751484-1abd79b628f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}/>
                <CategoryButton link={'edc'} title={'EDC'} img={'https://images.unsplash.com/photo-1628911771814-5d61388efbf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}/>

            </div>
            </div>
        </div>
        <div className="w-full bg-black h-[30rem] flex justify-center items-center text-white font-serif overflow-hidden">
          {/* <h1 className='text-4xl'>One stop for all hobbiests</h1> */}
          <div className="text-3xl absolute z-10 text-center">
            <h1>Share your favorite hobbies</h1>
          </div>
          <div className="flex relative items-center">  
          <div className="absolute w-full h-full bg-black/90 "></div>          
            <img className='w-1/2' src="https://images.unsplash.com/photo-1548783912-211df4c2b839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            <img className='w-1/2 h-full ' src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
          </div>
        </div>
        {/* <Section title={'setups'} link={'/setups'}/>
        <Section title={'EDC'} link={'/edc'}/>
        <Section title={'coffee'} link={'/coffee'}/>
        <Section title={'audio'} link={'/audio'}/> */}
    </div>  
  )
}
