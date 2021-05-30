import React from 'react'

import axios from 'axios'



class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount = () => {
        axios.get(`https://8cwutw7uv3.execute-api.us-west-1.amazonaws.com/dev/get-events`)

            .then((response) => {
                const data = response.data
                this.setState({ data })
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })


    }
    render() {
        return (
            <div className='text-center'>
                <div className='container'>
                    <div className=' section-title'>
                        <h2 >All Events</h2>
                    </div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th> Event</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Score</th>



                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((ele, i) => {
                                console.log(ele.stats.datetime_utc)
                                return (
                                    <tr  >
                                        <td> {ele.id} </td>
                                        <td> {ele.title} </td>
                                        <td> {ele.datetime_local} </td>
                                        <td> {ele.type} </td>
                                        <td> {ele.score} </td>




                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>


        )
    }
}

export default Events;


