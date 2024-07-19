import React from "react";
import ConditionalExample from "./15_condition";
export default class ConditionalExample2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                "title": "Title 1 ", "desc": "Lorem1, ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita ut? Voluptatem quidem... ", "tag": "orginal"
            }, {
                "title": "Title 2 ", "desc": "Lorem2, ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita ut? Voluptatem quidem... ", "tag": "fake"
            }, {
                "title": "Title 3 ", "desc": "Lorem3, ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita ut? Voluptatem quidem... ", "tag": "fake"
            },
            {
                "title": "Title 4 ", "desc": "Lorem4, ipsum dolor sit amet consectetur adipisicing elit. Labore, expedita ut? Voluptatem quidem... ", "tag": "orginal"
            }]
        }
    }
    render() {
        return <>
            <div className="container">
                <div className="row mt-5">
                    {this.state.data.map((element) => {
                        return <ConditionalExample data={element} />
                    })}
                </div>
            </div>
        </>
    }
}