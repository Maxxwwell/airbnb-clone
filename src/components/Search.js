import React, { useState } from 'react'
import { Button } from '@mui/material'
import { People } from '@mui/icons-material';
import styled from 'styled-components'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Search() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <SearchContainer>
      <DateRangePicker ranges={
        [selectionRange]}
        onChange={handleSelect}
      />
      <h2>
        Number of guests
        <People />
      </h2>
      <input min={0}
        defaultValue={2}
        type="number"
      />
      {/* <Button>
        Search Airbnb
      </Button> */}
    </SearchContainer>
  )
}

export default Search

const SearchContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 25%;
  /* width: 100vw;  */

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 559px;
    padding: 10px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 380px;
  }

  input {
    width: 539px;
    padding: 20px;
    position: absolute;
    left: 0;
    height: 30px;
    top: 420px;
    border: none;

    &:focus {
      outline-width: 0;
    }
  }

  /* Button {
    position: absolute;
    left: 0;
    top: 450px;
    text-transform: inherit;
    background-color: #ff7779;
    color: white;
    width: 579px;
  }  */

`

