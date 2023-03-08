import React, { useState } from "react";

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import { Card, Container } from 'react-bootstrap'
import 'react-day-picker/dist/style.css';


function DatePicker ({updateDate, selectedDate, days}) {
    
    console.log(days)

    
    const dateChange = (event) => {
        updateDate(event.toISOString().split('T')[0])
    }

    // loop days. if day.date === selected date then display that days information else null

    return (

        <Card className="chart-card">
            <Card.Header className="charts-title">Select a day</Card.Header>
            
            <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={dateChange} />
            </Container>
        </Card>
    )


}

export default DatePicker