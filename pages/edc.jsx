import React from 'react'
import CategorieLayout from '../components/CategorieLayout'
import {supabase} from '../utils/supabaseClient'

function edc({data}) {
  return (
    <CategorieLayout data={data} title={"EDC"} catFor='edc'>
  </CategorieLayout>
  )
}

export async function getServerSideProps(context) {
  let { data: Articles, error } = await supabase
  .from('Articles')
  .select('*')
  .match({category:'edc', reviewed:true})
  .order('created_at', { ascending: false })
  .order('views', { ascending: false })

  return {
    props: {data:Articles}, // will be passed to the page component as props
  }
}

export default edc