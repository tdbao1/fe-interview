import './Chart.css'
export type Props = {
  orangeClick: number,
  blueClick: number
}
const Chart = ({orangeClick, blueClick}: Props) => {
  return (
    <>
    <ul className="chart">
        <li>
          <span 
            className='background-orange' 
            style={{
              height: orangeClick + '%'
            }} 
            title='Orange'
            data-click={orangeClick}
          >
          </span>
        </li>
        <li >
          <span
            className='background-blue'
            style={{
              height: blueClick + '%'
            }}
            title='Blue'
            data-click={blueClick}
          >
          </span>
        </li>
 
    </ul>    
          
    </>
  )
}

export default Chart