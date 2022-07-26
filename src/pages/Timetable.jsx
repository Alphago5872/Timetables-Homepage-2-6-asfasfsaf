import Clock from "../components/Homepage-components/Clock/Clock";
import TimetableGrid from "../components/Timetable/TimetableGrid";
import WebCard from "../components/Wrapper-Components/Wrapper-1/WebCard_1";
import { getTimetable } from "../datas/datas";
import Year8_9 from "../components/Timetable/Years/Year8_9";
import Year10_11 from "../components/Timetable/Years/Year10_11";
import Year12_13 from "../components/Timetable/Years/Year12_13";

const year = "10-11";

const Timetable = () => {
  const year = localStorage.getItem('year');
  const comp = <TimetableGrid timetableContent={getTimetable} />;

  if (year == '8-9') {
    console.log('REEEEEEEEEEEEEEEE')
    return (
      <WebCard>
        <div className="timetable1">
          <div class="item item--1 timetable1__year">
            <i class="bx bx-info-circle"></i>
            <span>{`Year ${year}`}</span>
          </div>
  
          <div className="item item--1 timetable1__time">
            <i class="bx bx-time-five"></i>
            <Clock hour12={false} format={"hh-mm-ss"} />
          </div>
        </div>
        <div className="timetable__wrapper">
          <Year8_9 timetableContent={getTimetable} />
        </div>
      </WebCard>
    );
  }
  
  if (year == '10-11') {
    console.log('GRRRRRRRRRRRRRRRRRRR')
    return (
      <WebCard>
        <div className="timetable1">
          <div class="item item--1 timetable1__year">
            <i class="bx bx-info-circle"></i>
            <span>{`Year ${year}`}</span>
          </div>
  
          <div className="item item--1 timetable1__time">
            <i class="bx bx-time-five"></i>
            <Clock hour12={false} format={"hh-mm-ss"} />
          </div>
        </div>
        <div className="timetable__wrapper">
          <Year10_11 timetableContent={getTimetable} />
        </div>
      </WebCard>
    );
  }
  
  if (year == '12-13') {
    console.log('UOSHFUISHFUODHSFOU')
    return (
      <WebCard>
        <div className="timetable1">
          <div class="item item--1 timetable1__year">
            <i class="bx bx-info-circle"></i>
            <span>{`Year ${year}`}</span>
          </div>
  
          <div className="item item--1 timetable1__time">
            <i class="bx bx-time-five"></i>
            <Clock hour12={false} format={"hh-mm-ss"} />
          </div>
        </div>
        <div className="timetable__wrapper">
          <Year12_13 timetableContent={getTimetable} />
        </div>
      </WebCard>
    );
  }

  return (
    <WebCard>
      <div className="timetable1">
        <div class="item item--1 timetable1__year">
          <i class="bx bx-info-circle"></i>
          <span>{`Year ${year}`}</span>
        </div>

        <div className="item item--1 timetable1__time">
          <i class="bx bx-time-five"></i>
          <Clock hour12={false} format={"hh-mm-ss"} />
        </div>
      </div>
      <div className="timetable__wrapper">
        <TimetableGrid timetableContent={getTimetable} />
      </div>
    </WebCard>
  );
};

export default Timetable;
