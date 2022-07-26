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

const Year12_13 = (props) => {
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
          subject="Problem Solving with Your Team"
          teacher="Earth, Jay, Noey"
          room="Room 11-12"
        />
        <TimeBox
          subject="Sex Education"
          teacher="Aom, New, Noey, Oho, Namfon"
          room="Room 11-12"
        />
        <TimeBox subject="Introduction to Harvard CS50" teacher="Xeersoft" room="Room 8-10 (Fl 9)" />
        <TimeBox
          subject={"Mocktail"}
          teacher="Bib, New"
          room="Room 11-12 (Fl 9)"
        />

        <TimeBox subject="Wednesday" color="#6EDF64" no_hover />
        <TimeBox
          subject="Runic Astrology"
          teacher="Best"
          room="Room 11-12 (Fl 9)"
        />
        <TimeBox subject="Battle of the Brains" teacher="Earth, Dev, Win, Ya, Fluke" room="Room 1-4 (Fl 11)" />
        <TimeBox
          subject="Upcycle Challenge"
          teacher="Ed"
          room="Room Unknown"
          hori="2"
        />

        <TimeBox subject="Thursday" color="#FF8A00" no_hover />
        <TimeBox
          subject="The Sims™"
          teacher="Noey, Jay, Yui"
          room="Room 11-12 (Fl 9)"
        />
        <TimeBox subject="Self-Care for Stress Management" teacher="Bank, Got" room="Room 11-12 (Fl 9)" />
        <TimeBox
          subject="Bakery"
          teacher="New, Mink, Aom"
          room="Room 11-12 (Fl 9)"
        />
         <TimeBox
          subject="Boardgame"
          teacher="June, Sun"
          room="Room 11-12 (Fl 9)"
        />

        <TimeBox subject="Friday" color="#00988F" no_hover />
        <TimeBox subject="No School" hori="5" no_hover />

        <TimeBox subject="Lunch" lunch no_hover />
      </div>
    </Box>
  );
};

export default Year12_13;
