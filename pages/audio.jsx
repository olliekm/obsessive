import React from 'react'
import CategorieLayout from '../components/CategorieLayout'
import { useRouter } from 'next/router'
import {supabase} from '../utils/supabaseClient'

function audio({data}) {


  return (
    <CategorieLayout title={"Audio"} data={data} catFor='audio'>
      ..
    </CategorieLayout>
  )
}

export async function getServerSideProps(context) {
  let { data: Articles, error } = await supabase
  .from('Articles')
  .select('*')
  .match({category:'audio', reviewed:true})
  .order('created_at', { ascending: false })
  .order('views', { ascending: false })

  return {
    props: {data:Articles}, // will be passed to the page component as props
  }
}

export default audio