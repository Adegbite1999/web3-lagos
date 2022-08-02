import dynamic from 'next/dynamic';
import classNames from 'utils/classNames';

const DynamicComponent = dynamic(() =>
  import('react-date-countdown-timer'),
  { ssr: false },
  
)

;

interface Props {
  className?:string
}
const DateCountDown = ({className=''}:Props) => {
  return (<>   
    <div className={classNames(className, ' p-3 md:-mt-8 rounded-md bg-gradient')}> 
    {/* @ts-ignore */}
     <DynamicComponent dateTo="October 06, 2022 10:00:00 GMT+01:00"  style = {{
      border:"1px solid"
    }} />
    </div>
  </>)
}


export default DateCountDown

