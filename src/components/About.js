import React from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle] = useState(
    // {
    //     color:'white',
    //     backgroundColor :'black'
    // })

    let myStyle={
        color : props.mode === 'dark'?'white':'#215467',
        backgroundColor : props.mode === 'dark'?'#215467':'white',
        border : '2px white',
        //borderColor : props.mode === 'dark'?'white':'#215467',
    }


        return (
            <div className="container" style={myStyle}>
                <h1 className='my-3'>About</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyse your text
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils </strong>is a very efficient tool to analyze your text or make changes like converting to uppercase , converting to lower case , copy text etc
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free To Use
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong> is a free to use character counting tool which tells the number of character in a paragraph and the time taken to read the paragraph.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtil</strong> works in every browser or system such as chrome , firefox , safari, etc. It suits to count characters anywhere.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}