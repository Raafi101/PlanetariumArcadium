import React from 'react';
import './HomePage.css';
import Navbar from './components/NavBar.js';

function Home() {

    function getSearch() {
        window.location = '/Search'
    }

  return (
    <div id='masterDiv'>

      <Navbar />

      <div id='picHolder'>
        <img id='homePic' src='./images/homepagePic.jpg'/>
        <h1 id='homeText'>
            There's a whole universe filled with planets to explore <i class="icofont-telescope"></i>
        </h1>
        <button id="startBTN" onClick={getSearch}>
            Start exploring! &nbsp;<i class="icofont-rocket"/>
        </button>
      </div>

      <div id='subDiv'>
        <h1 id='subTitle'>About <i class="icofont-question-square"></i></h1>
        <p id='subText'>Planetarium Arcadium is a virtual orrery of thousands of different stars and planets. 
            All stars and planets were taken from the NASA Archives, along with the addition of other solar systems.
            *NOTE* Only stars with known planets will display in the search. 
            A star with no planets is not fun to play around with after all.
        </p>
      </div>

      <div id='subDiv'>
          <h1 id='subTitle'>The Creators <i class="icofont-users-alt-5"></i></h1>
          <p id='subText'>This project was created by the 'AstroNerds', a group of Math and Physics students from Hunter College for their Computer Science minor capstone class. The group consists of Raafi Rahman, Nusrat Jahan, Geethika Sasikumar, and Angeli Sandoval.</p>
      </div>

      <div id='subDiv'>
          <h1 id='subTitle'>Contact Us <i class="icofont-envelope"></i></h1>

          <p id='indivText'>Thinking about hiring us? Here is our contacts. We are sure to be valuable members of your team!</p>

          <div id='line'>
            <div id='indivDiv'>
                <p id='indivText1'>Raafi</p>
                <div id='linkGroup'>
                    <p id='indivText'>Website:&nbsp;</p>
                    <a id='links' href='https://raafi101.pythonanywhere.com/' target='_blank'>raafi101.pythonanywhere.com</a>
                </div>
                <br/>
                <div id='linkGroup'>
                    <p id='indivText'>GitHub:&nbsp;</p>
                    <a id='links' href='https://github.com/Raafi101' target='_blank'>github.com/Raafi101</a>
                </div>
                <br/>
                <div id='linkGroup'>
                    <p id='indivText'>LinkedIn:&nbsp;</p>
                    <a id='links' href='https://www.linkedin.com/in/raafi101/' target='_blank'>linkedin.com/in/raafi101</a>
                </div>
            </div>

            <div id='indivDiv'>
                <p id='indivText1'>Nusrat</p>
                <div id='linkGroup'>
                    <p id='indivText'>LinkedIn:&nbsp;</p>
                    <a id='links' href='https://www.linkedin.com/in/nusrat-jahan-8073b0167/' target='_blank'>linkedin.com/in/nusrat-jahan</a>
                </div>
            </div>

          </div>

          <div id='line'>
            <div id='indivDiv'>
                <p id='indivText1'>Geethika</p>
                <div id='linkGroup'>
                    <p id='indivText'>GitHub:&nbsp;</p>
                    <a id='links' href='https://github.com/Geethika1/' target='_blank'>github.com/Geethika1</a>
                </div>
                <br/>
                <div id='linkGroup'>
                    <p id='indivText'>LinkedIn:&nbsp;</p>
                    <a id='links' href='https://www.linkedin.com/in/geethikasasikumar/' target='_blank'>linkedin.com/in/geethikasasikumar</a>
                </div>
            </div>

            <div id='indivDiv'>
                <p id='indivText1'>Angeli</p>
                <div id='linkGroup'>
                    <p id='indivText'>GitHub:&nbsp;</p>
                    <a id='links' href='https://github.com/angelis21' target='_blank'>github.com/angelis21</a>
                </div>
                <br/>
                <div id='linkGroup'>
                    <p id='indivText'>LinkedIn:&nbsp;</p>
                    <a id='links' href='https://www.linkedin.com/in/angelis21/' target='_blank'>linkedin.com/in/angelis21</a>
                </div>
            </div>

          </div>
      </div>

    </div>
  );
}

export default Home;