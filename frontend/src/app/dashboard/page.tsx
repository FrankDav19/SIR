import Link from 'next/link';

function Dashboard() {

  

  return (
    <>
    <div>Dashboard Page</div>
    <br />
    <Link href={'/dashboard/profile'} style={{color: 'blue'}}>Profile</Link>
    <br />
    <Link href="/" style={{color: 'blue'}}>Logout</Link>
    </>
  )
}

export default Dashboard