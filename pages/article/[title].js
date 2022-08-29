import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {supabase} from '../../utils/supabaseClient'

function articlePage({data}) {
  const router = useRouter()
  const contentData = data[0]
  useEffect( () => {
      incrementViews()
  }, [])
  const views = contentData.views
  const contentId = contentData.id

  async function incrementViews(){
    const { data, error } = await supabase
    .from('Articles')
    .update({ views: contentData.views + 1 })
    .match({id: contentId})
  }
  
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <div className="w-full p-10 lg:w-3/6">
        <div className="w-full h-[30rem] overflow-hidden bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url("${contentData.img}")`}}>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex items-center space-x-5">
            <h1 className='font-serif text-5xl'>{contentData?.title}</h1>
            {
              contentData.verified && 
              <div className="flex items-center space-x-2 bg-green-500 text-white p-2 px-4">
                <small>VERIFIED</small>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 fill-white' viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg>
              </div>
            }
          </div>
          <div className="flex text-2xl items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-black w-6 h04 mr-2' viewBox="0 0 576 512"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg>
                <small>{contentData?.views + 1}</small>
            </div>
          <div className="mt-2">
            <p>{contentData.description}</p>
          </div>
          <div className="mt-10 text-lg">
            <p>{contentData.body}</p>
          </div>
        </div>
        <div className=" bg-black text-white flex p-5 font-serif text-2xl mt-5">
          <h1>Written by OBSESSIVE team</h1>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const params = context.params.title
  let { data: Articles, error } = await supabase
  .from('Articles')
  .select()
  .eq("id", params)

  if(Articles[0] === undefined){
    return {
      redirect: {
        permanent: false,
        destination: '/404'
      }
    }
  }

  return {
    props: {data:Articles}, // will be passed to the page component as props
  }
}

export default articlePage