import TimeBox from "../TimeBox";

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

const Year8_9 = (props) => {
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
          subject="Outsmarted"
          teacher="June, Sun"
          room="Room 1-4 (Fl 11)"
        />
        <TimeBox
          subject="Boardgame"
          teacher="June, Sun"
          room="Room 1-4 (Fl 11)"
        />
        <TimeBox subject="Bakery" teacher="New, Amy" room="Room 1-4 (Fl 11)" />
        <TimeBox
          subject={"Leadership"}
          teacher="Boom, Bank"
          room="Room 1-4 (Fl 11)"
        />

        <TimeBox subject="Wednesday" color="#6EDF64" no_hover />
        <TimeBox
          subject="Self Improvement"
          teacher="Bank, Got, Boom"
          room="Room 1-4 (Fl 11)"
        />
        <TimeBox subject="Battle of the Brains" teacher="Earth, Dev, Win, Ya, Fluke" room="Room 1-4 (Fl 11)" />
        <TimeBox
          subject="Game Theory, 24® and Strategy Game"
          teacher="Aong, Paoju, Koong"
          room="Room 1-4 (Fl 11)"
          hori="2"
        />

        <TimeBox subject="Thursday" color="#FF8A00" no_hover />
        <TimeBox
          subject="Behind the Enemy Lines"
          teacher="Earth"
          room="Room 1-4 (Fl 11)"
        />
        <TimeBox
          subject="All about Hair from around the World"
          teacher="Le'Ana"
          room="Room 1-4 (Fl 11)"
        />
        <TimeBox
          subject="Career Test"
          teacher="Amy, Koong"
          room="Room 1-4 (Fl 11)"
        />
        <TimeBox
          subject="Physical Education"
          teacher="Max, Jaja"
          room="Room 1-4 (Fl 11)"
        />

        <TimeBox subject="Friday" color="#00988F" no_hover />
        <TimeBox subject="No School" hori="5" no_hover />

        <TimeBox subject="Lunch" lunch no_hover />
      </div>
    </Box>
  );
};

export default Year8_9;
