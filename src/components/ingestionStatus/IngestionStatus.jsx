import './ingestionStatus.css'
import CircleIcon from '@mui/icons-material/Circle';

const IngestionStatus = () => {
  return (
    <div className="ingestionStatus">
      <div className="ingestionStatusContainer">
        <div className="status">
          <CircleIcon />
        </div>
        <div className="date">12/28</div>
        <div className="tableCount">10 table</div>
      </div>
    </div>
  )
}

export default IngestionStatus