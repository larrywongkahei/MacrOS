import React, { useState } from "react";

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'

function DatePicker ({updateDate, selectedDate}) {
    console.log(selectedDate);
    
    const dateChange = (event) => {
        updateDate(event)
    }
    return (
        <div className="component-container">
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={dateChange} />
        </div>
    )


}

export default DatePicker