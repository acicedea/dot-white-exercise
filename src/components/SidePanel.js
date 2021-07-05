import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { Divider, Input } from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#FFFFFF",
    marginTop: 50,
    marginRight: 150,
    height: 650,
    width: "100%",
    borderRadius: 10,
  },
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  h3: {
    color: "#4b4b4b",
    display: "inline",
  },
  icon: {
    color: "#2a6ae8",
    display: "inline",
    float: "right",
  },
  author: {
    display: "inline",
  },
  item: {
    padding: 20,
  },
  input: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    paddingTop: 30,
  },
  filters: {
    padding: 20,
  },
}));

const SidePanel = ({ headerText, selectedItems, closePanel, removeItem }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "dd/MM/yyyy")
  );

  //set state on date picker change
  const handleDateChange = (date) => {
    setSearchTerm(format(date, "dd/MM/yyyy"));
    setSelectedDate(date);
  };

  //set state on search input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //set state on author dropdown change
  const handleSelect = (event) => {
    setSelectedAuthor(event.target.value);
    setSearchTerm(event.target.value);
  };

  //set initial items from props
  useEffect(() => {
    setSearchResults(selectedItems);
  }, [selectedItems]);

  //search function based on typing author, text, timestamp or author dropdown selection
  useEffect(() => {
    const results = selectedItems.filter(
      (item) =>
        item.author.includes(searchTerm) ||
        item.text.includes(searchTerm) ||
        item.timestamp.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <div className={classes.header}>
          <h3 className={classes.h3}>{headerText}</h3>
          <CancelPresentationIcon
            className={classes.icon}
            onClick={closePanel}
          />
        </div>
        <div className={classes.filters}>
          <Input
            type="search"
            placeholder="Search by author/text/timestamp"
            value={searchTerm}
            onChange={handleInputChange}
            className={classes.input}
          ></Input>
          <FormHelperText>Filter by author</FormHelperText>
          <Select
            className={classes.input}
            labelId="author-select-label"
            id="author-select"
            value={selectedAuthor}
            onChange={handleSelect}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {searchResults.map((item) => (
              <MenuItem value={item.author}>{item.author}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Filter by date</FormHelperText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.input}
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        {/* render a list of selected notes */}
        {searchResults.map((item) => {
          return (
            <div className={classes.item} key={item.key}>
              <p className={classes.author}>{item.author}</p>
              <RemoveCircleOutlineIcon
                className={classes.icon}
                onClick={() => {
                  removeItem(item.key);
                }}
              />
              <p>{item.timestamp}</p>
              <p>{item.text}</p>
              <Divider />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidePanel;
