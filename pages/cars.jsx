import React from 'react'
import CategorieLayout from '../components/CategorieLayout'
import {supabase} from '../utils/supabaseClient'

function cars({data}) {
  return (
    <CategorieLayout title={"Cars"} data={data} catFor='cars'>
  </CategorieLayout>
  )
}

export async function getServerSideProps(context) {
  let { data: Articles, error } = await supabase
  .from('Articles')
  .select('*')
  .match({category:'cars', reviewed:true})
  return {
    props: {data:Articles}, // will be passed to the page component as props
  }
}

export default cars