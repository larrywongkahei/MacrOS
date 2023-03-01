import React, { useState } from "react";

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'

function DatePicker () {
    const [selectedDate, setSeletedDate] = useState()

    return (
        <DayPicker
        mode="single"
        seleted={selectedDate}
        onSelect={setSeletedDate} />
    )


}

export default DatePicker