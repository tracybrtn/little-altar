import SvgComponent from '../SVG-Loading';

const Loading=()=> {
  return(
    <main className='loading-page'>
      <div className='svg-container'> 
        <SvgComponent className="cloud-1"/>
      </div>
      <div className='h1-container'>
        <h1>Loading</h1>
      </div>
      <div className='svg-container'> 
        <SvgComponent className="cloud-2"/>
      </div>
    </main>
  )
}

export default Loading;