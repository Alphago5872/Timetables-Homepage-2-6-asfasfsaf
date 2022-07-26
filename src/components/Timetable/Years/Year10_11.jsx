import TimeBox from "../TimeBox";
import weekdayBox from "../WeekdayBox";

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

const timeLayout = [
  "09:00 - 10:30",
  "10:30 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:30",
  "14:30 - 16:00",
];

const Year10_11 = (props) => {
  return (
    <Box className="ttbigbox">
      <div className="timetable">
        {/* {props.timetableContent.content &&
        props.timetableContent.content.map((weekday, index) => {
          console.log(weekday, index);
        })}{" "} */}
        <div className="timetable__time timetable__time--empty">
          <h3></h3>
        </div>
        {timeLayout.map((time, index) => {
          return (
            <div
              className={`timetable__time ${
                index === 0 ? "timetable__time--first" : ""
              } ${
                index === timeLayout.length - 1 ? "timetable__time--last" : ""
              }`}
            >
              <h3>{time}</h3>
            </div>
          );
        })}

        <TimeBox subject="Monday" color="#F0D750" no_hover />
        <TimeBox subject="No School" hori="5" no_hover />

        <TimeBox subject="Tuesday" color="#FF7F7F" no_hover />
        <TimeBox
          subject="Self Improvement"
          teacher="Bank, Got, Boom"
          room="Room 8-10 (FL 9)"
        />
        <TimeBox
          subject="Self Care for Stress"
          teacher="Bank, Got"
          room="Room 8-10 (FL 9)"
        />
        <TimeBox subject="CS50X" teacher="Xeersoft" room="Room 8-10 (FL 9)" />
        <TimeBox
          subject="Story of Religion"
          teacher="Oho, Jaja"
          room="Room 8-10 (FL 9)"
        />

        <TimeBox subject="Wednesday" color="#6EDF64" no_hover />
        <TimeBox
          subject="Tarot Horoscope"
          teacher="Namfon, Ya, Oho, Amy"
          room="Room 8-10 (FL 9)"
        />
        <TimeBox
          subject="Battle of Brains"
          teacher="Earth, Win, Dev, Ya, Fluke"
          room="Room 1-4 (FL 11)"
        />
        <TimeBox subject="Upcycle Challange" teacher="Ed" room="" hori="2" />

        <TimeBox subject="Thursday" color="#FF8A00" no_hover />
        <TimeBox subject="Bakery" teacher="New, Aom" room="Room 8-10 (FL 9)" />
        <TimeBox
          subject="All hair from around the world"
          teacher="Leana"
          room="Room 1-4 (FL 11)"
        />
        <TimeBox
          subject="Boardgame"
          teacher="June, Sun"
          room="Room 8-10 (FL 9)"
        />
        <TimeBox
          subject="Public Speaking and Comedy"
          teacher="Leana"
          room="Room 8-10 (FL 9)"
        />

        <TimeBox subject="Friday" color="#00988F" no_hover />
        <TimeBox subject="No School" hori="5" no_hover />

        <TimeBox subject="Lunch" lunch no_hover />
      </div>
    </Box>
  );
};

export default Year10_11;
