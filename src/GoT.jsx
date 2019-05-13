import React, { Component } from 'react';

class GoT extends Component {
  constructor() {
    super(props);
    this.state = {};
  }

  render() {
    //prettier-ignore
    let picks = {
    "Sansa Stark": '',
    "Arya Stark": '',
    "Jon Snow": '',
    "Jaime Lannister": '',
    "Cersei Lannister": '',
    "Daenerys Targaryen": '',
    "Tyrion Lannister": '',
    "Theon Greyjoy": '',
    "Yara Greyjoy": '',
    "Euron Greyjoy": '',
    "Samwell Tarly": '',
    "Gilly": '',
    "Varys": '',
    "Melisandre": '',
    "Beric Dondarrion": '',
    "Lyanna Mormont": '',
    "Jorah Mormont": '',
    "Brienne of Tarth": '',
    "Davos Seaworth": '',
    "Bronn": '',
    "Gendry ": '',
    "Sandor Clegane “The Hound”": '',
    "Meera Reed": '',
    "Podrick Payne": '',
    "Grey Worm": '',
    "Missandei": '',
    "Robin Arryn": '',
    "Tormund ": '',
    "Drogon": '',
    "Rheagal": '',
    "Qyburn": '',
    "Daario Naharis": '',
    "Enter a specific character OR choose an answer. The Throne is Vacant. The Throne is Destroyed": '',
    "Is Bran the Night King": '',
    "Who will wil the Clegane Bowl?": '',
    "Will Daenerys give birth to a living human baby?": '',
    "Will Euron betray Cersei": '',
    "If Cersei is killed, who kills her? (If she survives or if none of the answers are correct, no point)": '',
    "Who will kill Melisandre? ": '',
    "Who dies first?": '',
    "Who dies last?": '',
    "Who kills the Night King? (if he’s killed)": '',
    "Who is Azor Ahai? (The Prince(ess) that was promised)": '',
    }

    return <div>{picks}</div>;
  }
}

export default GoT;
