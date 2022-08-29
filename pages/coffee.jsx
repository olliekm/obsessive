import React from 'react'
import CategorieLayout from '../components/CategorieLayout'
import {supabase} from '../utils/supabaseClient'

function coffee({data}) {
  return (
    <CategorieLayout title={"Coffee"} data={data} catFor='coffee'>
  </CategorieLayout>
  )
}

export async function getServerSideProps(context) {
  let { data: Articles, error } = await supabase
  .from('Articles')
  .select('*')
  .match({category:'coffee', reviewed:true})
  return {
    props: {data:Articles}, // will be passed to the page component as props
  }
}


export default coffee