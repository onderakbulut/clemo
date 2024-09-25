import dynamic from 'next/dynamic'

const Works = dynamic(
    () => import('@/components/works/works'),
    { ssr: false }
  )
function Work() {
    return ( 
        <div>
            <Works title="Works" category="all" />
        </div>
     );
}

export default Work;