const onChangeMenu = (state, setMenu) => {
  setMenu(state);
};
const Switch = (menu, elem) => {
  const timeframes = {
    1: {
      current: elem.timeframes.daily.current,
      previous: elem.timeframes.daily.previous,
      text: "Yesterday",
    },
    2: {
      current: elem.timeframes.weekly.current,
      previous: elem.timeframes.weekly.previous,
      text: "Last Week",
    },
    3: {
      current: elem.timeframes.monthly.current,
      previous: elem.timeframes.monthly.previous,
      text: "Last Month",
    },
  };
  return timeframes[menu];
};
export { onChangeMenu, Switch };
