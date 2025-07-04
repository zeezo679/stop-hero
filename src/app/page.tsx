'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/SupabaseClient';
import  Section1  from '.././section1'
import Section3 from '../section3'
import Section2 from '../section2'
import Section4 from '../section4'


export default function Home() {
    const [data, setData] = useState<unknown[]>([])

    useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('instruments').select('*')
      if (error) console.error('Supabase error:', error)
      else setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className="w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* main */}
      <main className='w-full'>
        {/* sections */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </div>
  );
}
