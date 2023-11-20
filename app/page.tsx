import Image from 'next/image'
import JobList from './components/Joblist'

export default function Home() {
  return (
    <div>
      <h1>Jobs Available</h1>
      <JobList />
    </div>
  )
}
