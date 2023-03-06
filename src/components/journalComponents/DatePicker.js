import React, { useState } from "react";

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'

function DatePicker ({updateDate, selectedDate, days}) {
    console.log(selectedDate);
    
    console.log(days)
    
    const dateChange = (event) => {
        updateDate(event)
    }

    // loop days. if day.date === selected date then display that days information else null

    return (
        <div className="component-container">
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={dateChange} />
        
            {/* <div>
                <p>info for selected day displayed here</p>
            </div> */}
        </div>
    )


}

export default DatePicker