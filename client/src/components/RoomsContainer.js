import './RoomsContainer.css'

const RoomsContainer = () => {
  return (
    <div className="rooms-list">
      <div className="room">
        <img className="room__banner" src="" alt="" />
        <div className="room__body">
          <div className="room__name">Room 1</div>
        </div>
      </div>
      
      <div className="room">
        <img className="room__banner" src="" alt="" />
        <div className="room__body">
          <div className="room__name">
            <h2>Room 2</h2>
          </div>
        </div>
      </div>
      
      <div className="room">
        <img className="room__banner" src="" alt="" />
        <div className="room__body">
          <div className="room__name">Room 3</div>
        </div>
      </div>
    </div>
  )
}

export default RoomsContainer