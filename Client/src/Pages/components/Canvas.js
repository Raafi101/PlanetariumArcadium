import React, {useRef, useEffect, useState} from 'react';
import './Canvas.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// discovery_method: null
// distance: 0
// eccentricity: 0.205
// effective_temperature: 450
// host_name: "Sun"
// inclination: null
// number_of_planets_in_system: 8
// optical_magnitude: null
// orbit_semi_major_axis: 0.39
// orbital_period: 87.96
// planet_density: 5.427
// planet_letter: "Mercury"
// planet_mass: 0.00017
// planet_radius: 0.034
// stellar_mass: 1
// stellar_radius: 1
// current_angle: 0 ***THIS WAS ADDED BY ME AT RUN TIME***

function Canvas(props) {
    // Make a fetch call here to get access to DB
    // Save as a json similar to in components/search.js
    // Take this list of planets and replace it with a dictionary (json)
    // with all the planets in it. You can have all this same data in it.
    // Save into var planets array

    var starName = window.location.pathname.substring(1)

    var starNameNew = ''

    var planets = []; 

    async function getStarData() {

        const response = await fetch(`http://localhost:5000/bodies/?name=${starName}`);

        const parseResponse = await response.json();

        starNameNew = starName
        while(starNameNew.includes('%20')) {
            starNameNew = starNameNew.replace('%20', ' ')
        }
        
        for (var planet of parseResponse) {
            if (planet['host_name'] === starNameNew) {
                planet['currentAngle'] = 0
                planets.push(planet)
            }
        }
        console.log(planets)
    }

    getStarData()

    // Get each planet from a saved JSON
    // that can be saved as a var variable dynamically created

    var zoomFactor = 2
    var timeFactor = 2
    var planetFactor = 2

    const zoomMarks = [
        {
            value:-5,
            label:'-5',
        },
        {
            value:-4,
            label:'-4',
        },
        {
            value:-3,
            label:'-3',
        },
        {
            value:-2,
            label:'-2',
        },
        {
            value:-1,
            label:'-1',
        },
        {
            value:0,
            label:'0',
        },
        {
            value:1,
            label:'1',
        },
        {
            value:2,
            label:'2',
        },
        {
            value:3,
            label:'3',
        },
        {
            value:4,
            label:'4',
        },
        {
            value:5,
            label:'5',
        },
    ]

    const timeMarks = [
        {
            value:-10,
            label:'-3',
        },
        {
            value:-6.6,
            label:'-2',
        },
        {
            value:-3.3,
            label:'-1',
        },
        {
            value:0,
            label:'0',
        },
        {
            value:3.3,
            label:'1',
        },
        {
            value:6.6,
            label:'2',
        },
        {
            value:10,
            label:'3',
        }
    ]

    function valueLabelFormatZ(value) {
        return `${value}`;
    }
    
    function valueLabelFormatT(value) {
        return `2^${value}`;
    }

    function ZoomSlider() {
        const [value, setValue] = React.useState(1);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
          zoomFactor = (2**value)
          planetFactor = (2**value)
        };
      
        return (
          <div>
            <Typography id="zoomText" gutterBottom>
              <i class="icofont-ui-zoom-out"/>
              &nbsp;
              Zoom
              &nbsp;
              <i class="icofont-ui-zoom-in"/>
            </Typography>
            <Slider
              rail='white'
              defaultValue={0}
              value={value}
              min={-5}
              step={.05}
              max={5}
              getAriaValueText={valueLabelFormatZ}
              valueLabelFormat={valueLabelFormatZ}
              onChange={handleChange}
              valueLabelDisplay="off"
              aria-labelledby="non-linear-slider"
              marks={zoomMarks}
            />
          </div>
        );
    }

    function TimeSlider() {
        const [value, setValue] = React.useState(3.33333);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
          timeFactor = (value/3)**9
        };
      
        return (
          <div>
            <Typography id="timeText" gutterBottom>
              <i class="icofont-double-left"></i>
              &nbsp;
              Time Acceleration
              &nbsp;
              <i class="icofont-double-right"></i>
            </Typography>
            <Slider
              value={value}
              defaultValue={0}
              min={-10}
              step={.1}
              max={10}
              getAriaValueText={valueLabelFormatT}
              valueLabelFormat={valueLabelFormatT}
              onChange={handleChange}
              valueLabelDisplay="off"
              aria-labelledby="non-linear-slider"
              marks={timeMarks}
            />
          </div>
        );
    }
    
    const canvasRef = useRef(null)

    const terrestrialColors = ['#b35600', '#b37100', '#0064b5', '#b32400']
    const jovianColors = ['#de7a00', '#dea300', '#0094b5', '#0036b5']

    const drawStar = (ctx) => {
        ctx.fillStyle = '#fcdb03'
        ctx.beginPath()
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, planetFactor*10 + 2, 0, 2*Math.PI)
        ctx.fill()
        ctx.font = '35px Trebuchet MS'
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'black'
        ctx.fillText(starNameNew, ctx.canvas.width / 2, ctx.canvas.height / 2)
    }

    const drawSpace = (ctx, planet) => {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight * .82;
        var img = document.getElementById('StarryNight')
        ctx.drawImage(img, 0, 0)
    }

    const drawOrbits = (ctx, distance) => {
        ctx.lineWidth = 1
        ctx.strokeStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, distance, 0, 2*Math.PI)
        ctx.stroke()
    }

    const drawPlanet = (ctx, planet) => {
        var distance = zoomFactor*(planet.orbit_semi_major_axis*200 + 15)
        var x = distance * Math.cos(planet.currentAngle)
        var y = distance * Math.sin(planet.currentAngle)
        ctx.fillStyle = ''
        if (planet.planet_radius >= .34) {
            if (planet.orbit_semi_major_axis < 9.5) {
                ctx.fillStyle = jovianColors[0]
            } else if (planet.orbit_semi_major_axis < 19) {
                ctx.fillStyle = jovianColors[1]
            } else if (planet.orbit_semi_major_axis < 30) {
                ctx.fillStyle = jovianColors[2]
            } else {
                ctx.fillStyle = jovianColors[3]
            }
        }
        else {
            if (planet.orbit_semi_major_axis < .7) {
                ctx.fillStyle = terrestrialColors[0]
            } else if (planet.orbit_semi_major_axis < 1) {
                ctx.fillStyle = terrestrialColors[1]
            } else if (planet.orbit_semi_major_axis < 1.5) {
                ctx.fillStyle = terrestrialColors[2]
            } else {
                ctx.fillStyle = terrestrialColors[3]
            }
        }
        ctx.beginPath()
        ctx.arc((ctx.canvas.width / 2) + x, (ctx.canvas.height / 2) + y, planetFactor + 2, 0, 2*Math.PI)
        ctx.fill()
        ctx.font = '30px Trebuchet MS'
        ctx.fillStyle = 'white'
        ctx.fillText(planet.planet_letter, (ctx.canvas.width / 2) + x, (ctx.canvas.height / 2) + y)
    }

    useEffect(() => {
        var canvas = canvasRef.current
        var context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
        
        const render = () => {
            frameCount += timeFactor
            drawSpace(context)
            drawStar(context)
            for (const planet of planets) {
                drawOrbits(context, zoomFactor*(planet.orbit_semi_major_axis*200 + 15))
            }
            for (const planet of planets) {
                drawPlanet(context, planet)
                planet.currentAngle = frameCount*(1/planet.orbital_period)
            }
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [drawStar, drawOrbits, drawPlanet])

    return (
        <div>
            
            <div id='controlBlock'>
                <ul>    
                    <ZoomSlider id='zoomSlider'/>
                </ul>
                <ul>
                    <TimeSlider id='timeSlider'/>
                </ul>
            </div>

            <canvas id='CANVAS' ref={canvasRef} {...props}/>
            
        </div>
    )
}

export default Canvas