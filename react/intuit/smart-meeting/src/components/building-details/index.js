import "./styles.css";
import { APP_CONSTANTS } from "../../constants";
import { useFetchApi } from "../../hooks";
import {Select} from '../ui';
import { useEffect, useMemo, useState } from "react";
import * as utils from '../../utils';



const fetchBuildingDetails = `query {
  Buildings {
    name
  }
}`;

const fetchMeetingRoomsDetails = `query{
  MeetingRooms{
    name
    floor
    building{
      name
    }
    meetings{
      title
      date
      startTime
      endTime
    }
  }
}`;

export default function BuildingDetails() {
  const [rooms, setRooms] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [loadingBuildings, buildingsResponse, buildingsError] = useFetchApi(APP_CONSTANTS.API_URL, fetchBuildingDetails);
  const [loadingRooms, roomsResponse, roomsError] = useFetchApi(APP_CONSTANTS.API_URL, fetchMeetingRoomsDetails);

  useEffect(() => {
    if(roomsResponse) {
      console.log(roomsResponse)
      setRooms(roomsResponse.MeetingRooms);
    }
    if(buildingsResponse) {
      setBuildings(buildingsResponse.Buildings);
    }
  }, [roomsResponse, buildingsResponse]);


  const totalMeetings = useMemo(() => {
    return rooms.reduce((acc, {meetings}) => {
      acc += meetings.length;
      return acc;
    }, 0)
  }, [rooms]);

  const availableRooms = useMemo(() => {
    return rooms.reduce((acc, room) => {
      const meetings = room.meetings;
      if(meetings.some(({date, startTime, endTime}) => utils.isCurrentTimeInRange(date, startTime, endTime))) {
        return acc;
      }
      acc += 1;
      return acc;
    }, 0);
  }, [rooms]);

  if (loadingRooms) {
    return <div>
      Please wait ...
    </div>
  }

  
  return(<div>
   <Select label="Select Building" name="building" options={buildings} onSelect={() => {}}/>
   <div className="building-details">
      <div className="content">
        <h4>Building</h4>
        <p>Total {buildings.length}</p>
      </div>
      <div className="content">
        <h4>Rooms</h4>
        <p>Total {rooms.length}</p>
        <p>Free Now {availableRooms}</p>
      </div>
      <div className="content">
        <h4>Meetings</h4>
        <p>Total {totalMeetings}</p>
        <p>Total {rooms.length - availableRooms}</p>
      </div>
   </div>
  </div>);
}
