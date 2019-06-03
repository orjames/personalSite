import React, { Component } from 'react';
import './GoT.css';

class GoT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //prettier-ignore
    let choices = ["Sansa Stark","Arya Stark","Jon Snow","Jaime Lannister","Cersei Lannister","Daenerys Targaryen","Tyrion Lannister","Theon Greyjoy","Yara Greyjoy","Euron Greyjoy","Samwell Tarly","Gilly","Varys","Melisandre","Beric Dondarrion","Lyanna Mormont","Jorah Mormont","Brienne of Tarth","Davos Seaworth","Bronn","Gendry","Sandor Clegane “The Hound”","Meera Reed","Podrick Payne","Grey Worm","Missandei","Robin Arryn","Tormund ","Drogon","Rheagal","Qyburn","Daario Naharis","Enter a specific character OR choose an answer. The Throne is Vacant. The Throne is Destroyed","Is Bran the Night King","Who will wil the Clegane Bowl?","Will Daenerys give birth to a living human baby?","Will Euron betray Cersei","If Cersei is killed, who kills her? (If she survives or if none of the answers are correct, no point)","Who will kill Melisandre? ","Who dies first?","Who dies last?","Who kills the Night King? (if he’s killed)","Who is Azor Ahai? (The Prince(ess) that was promised)"]

    let choicesDisplay = choices.map((choice, index) => {
      return (
        <div key={index} className={`a${index} cell`}>
          {choice}
        </div>
      );
    });

    // prettier-ignore
    let nameChoices = ['','correct','owen','ders','doub','nico','nicole','nathan','davidDeg','kellyn','flan','kimberly'];
    let aString = 'a';
    let aCode = aString.charCodeAt(0);

    let names = nameChoices.map((name, index) => {
      let letter = String.fromCharCode(aCode + index);
      return (
        <div key={index} className={`${letter}00 cell`}>
          {name}
        </div>
      );
    });

    //prettier-ignore,
    let peoplesPicks = {

        choices: ["Sansa Stark","Arya Stark","Jon Snow","Jaime Lannister","Cersei Lannister","Daenerys Targaryen","Tyrion Lannister","Theon Greyjoy","Yara Greyjoy","Euron Greyjoy","Samwell Tarly","Gilly","Varys","Melisandre","Beric Dondarrion","Lyanna Mormont","Jorah Mormont","Brienne of Tarth","Davos Seaworth","Bronn","Gendry","Sandor Clegane “The Hound”","Meera Reed","Podrick Payne","Grey Worm","Missandei","Robin Arryn","Tormund ","Drogon","Rheagal","Qyburn","Daario Naharis","Enter a specific character OR choose an answer. The Throne is Vacant. The Throne is Destroyed","Is Bran the Night King","Who will wil the Clegane Bowl?","Will Daenerys give birth to a living human baby?","Will Euron betray Cersei","If Cersei is killed, who kills her? (If she survives or if none of the answers are correct, no point)","Who will kill Melisandre? ","Who dies first?","Who dies last?","Who kills the Night King? (if he’s killed)","Who is Azor Ahai? (The Prince(ess) that was promised)"],
        correct: ["alive", "alive", "alive", "dead", "dead", "dead", "alive", "dead", "alive", "dead", "alive", "alive", "dead", "dead", "alive", "dead", "dead", "alive", "alive", "alive", "alive", "dead", "alive", "alive", "alive", "dead", "alive", "alive", "alive", "dead", "dead", "N/A", "Throne Destroyed", "No", "Tie", "No", "No", "Drogon / Rubble", "Herself", "Lyanna Mormont", "Daenarys Targaryen ", "Arya", "N/A (bran?)"],
        owen : ['alive','alive','alive','dead','dead','alive','alive','dead','alive','dead','alive','alive','alive','dead','dead','alive','dead','alive','alive','alive','alive','dead','dead','alive','dead','alive','alive','dead','alive','alive','dead','dead','Throne Destroyed','No','The Hound','Yes','Yes','Jaime','Night King','Beric Dondarrion','Cersei','Jon Snow','Jon Snow'],
        ders : ['alive','alive','dead','dead','dead','dead','alive','alive','dead','dead','alive','alive','dead','alive','alive','dead','dead','dead','alive','alive','dead','dead','dead','alive','dead','alive','alive','alive','dead','dead','alive','dead','Throne is Vacant','Yes','The Hound','Yes','Yes','Arya','Euron Greyjoy','Yara Greyjoy','Daenarys Targaryen','Jon Snow','Daenarys Targaryen'],
        doub : ['alive','dead','alive','dead','dead','dead','alive','dead','alive','dead','alive','alive','dead','dead','dead','alive','dead','dead','dead','dead','alive','dead','dead','alive','dead','dead','dead','dead','alive','dead','dead','alive','Throne Destroyed','No','The Hound','Yes','No','Jaime','Arya','Beric Dondarrion','Daenarys Targaryen','Jon Snow','Daenarys Targaryen'],
        nico : ["alive","alive","alive","alive","dead","dead","alive","dead","dead","dead","alive","alive","alive","dead","dead","dead","dead","alive","dead","dead","dead","alive","alive","alive","dead","dead","dead","alive","alive","dead","dead","dead","Throne Destroyed","No","The Hound","Yes","Yes","Jaime","Arya","Beric Dondarrion","Daenarys Targaryen","Jon Snow","Daenarys Targaryen & Jon Snow Together"],
        nicole: ['alive','alive','alive','alive','dead','alive','alive','dead','dead','dead','alive','dead','alive','dead','dead','alive','dead','alive','dead','dead','alive','dead','dead','dead','alive','dead','dead','dead','alive','dead','dead','alive','Throne Destroyed','Yes','The Hound','Yes','Yes','Jaime','Jon Snow','Theon','Cersei','Jon Snow','Jon Snow'],
        nathan : ["alive","alive","dead","dead","dead","dead","alive","dead","dead","dead","alive","alive","alive","dead","dead","alive","dead","alive","alive","dead","alive","dead","dead","alive","dead","dead","dead","dead","alive","dead","dead","alive","Throne is Vacant","Yes","The Hound","Yes","Yes","Jaime","Davos Seaworth","Beric Dondarrion","Night King","Arya","Aegon Targaryen (Jon Snow)"],
        davidDeg : ['dead','dead','alive','dead','alive','alive','alive','dead','dead','dead','dead','dead','dead','dead','dead','dead','dead','alive','alive','alive','dead','dead','dead','alive','dead','dead','dead','dead','alive','alive','alive','dead','Throne Destroyed','No','The Hound','No','Yes','Jaime','Jon Snow','Theon','Jaime','Jaime','Daenarys Targaryen'],
        kellyn : ["alive","dead","dead","dead","dead","dead","alive","dead","alive","alive","alive","alive","dead","dead","dead","alive","dead","dead","dead","dead","alive","alive","dead","alive","dead","dead","dead","dead","dead","dead","dead","dead","Throne Destroyed","No","The Hound","Yes","Yes","Jaime","Davos Seaworth","Tormund","Jon Snow","Sam Tarley","Daenarys Targaryen"],
        flan : ['dead','dead','alive','alive','dead','alive','dead','dead','dead','alive','alive','alive','dead','dead','dead','dead','alive','dead','dead','dead','alive','dead','dead','dead','dead','alive','dead','dead','alive','dead','dead','alive','Throne Destroyed','No','The Hound','Yes','No','Jaime','Wight','Tormund','Cersei','Jon Snow','Jaime'],
        kimberly : ['alive','alive','alive','dead','dead','dead','alive','dead','dead','dead','alive','alive','alive','dead','dead','alive','dead','alive','dead','dead','alive','dead','alive','dead','dead','dead','dead','dead','dead','dead','dead','dead','Throne Destroyed','Yes','The Hound','Yes','Yes','Jaime','Arya','Beric Dondarrion','The Night King','Jon Snow','Jon Snow',]
      }

    let peoplesPicksArr = Object.values(peoplesPicks);
    // prettier-ignore
    let score = {owen: 0,ders: 0,doub: 0,nico: 0,nicole: 0,nathan: 0,davidDeg: 0,kellyn: 0,flan: 0,kimberly: 0,};
    let correct = peoplesPicks.correct;
    for (let i = 2; i < peoplesPicksArr.length; i++) {
      for (let j = 0; j < peoplesPicksArr[i].length; j++) {
        if (peoplesPicksArr[i][j] === correct[j]) {
          score[nameChoices[i]]++;
        }
      }
    }

    let correctClass;
    let picksDisplay = peoplesPicksArr.map((pick, index) => {
      return pick.map((choice, i) => {
        if (peoplesPicksArr[index][i] === correct[i]) {
          correctClass = 'correct';
        } else {
          correctClass = 'wrong';
        }
        return (
          <div
            key={i}
            className={`${String.fromCharCode(aCode + index) +
              i} cell ${correctClass}`}
          >
            {choice}
          </div>
        );
      });
    });

    let scoreArr = Object.entries(score);
    let scoreDisplay = scoreArr.map((person, index) => {
      return (
        <div key={index}>
          {person[0]}: {person[1]}
        </div>
      );
    });

    return (
      <div className='GoTHome'>
        <div className='header'>The GoT Pool</div>
        <div className='scores'>{scoreDisplay}</div>
        <div className='grid'>
          {names}
          {picksDisplay}
        </div>
      </div>
    );
  }
}

export default GoT;
