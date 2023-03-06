import React, { useState } from "react";

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'

function DatePicker ({updateDate, selectedDate, days}) {
    
    const dateChange = (event) => {
        updateDate(event.toISOString().split('T')[0])
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