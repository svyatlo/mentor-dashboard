import '../../css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import mentors from './createMentorsArray';
import findStudentsInfo from './findStudentsInfo.jsx';
import findMentor from './findMentor';

const options = mentors;

class MentorSelect extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedOption: null,
      studentsOfMentor: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isMentorInLocalStorage = this.isMentorInLocalStorage.bind(this);
  }

  handleChange(selectedOption) {
    localStorage.setItem('selectedOption', selectedOption.label);
    this.setState({ selectedOption });

    let { studentsOfMentor } = this.state;
    studentsOfMentor = findStudentsInfo(selectedOption.label);
    this.setState({ studentsOfMentor });
  }

  isMentorInLocalStorage() {
    let { selectedOption } = this.state;
    let { studentsOfMentor } = this.state;

    if (localStorage.getItem('selectedOption') !== null) {
      const savedMentor = localStorage.getItem('selectedOption');

      selectedOption = findMentor(savedMentor, options);
      this.setState({ selectedOption });

      const mentor = selectedOption.label;
      studentsOfMentor = findStudentsInfo(mentor);
      this.setState({ studentsOfMentor });
    }
  }

  componentDidMount() {
    window.addEventListener('DOMContentLoaded', this.isMentorInLocalStorage);
  }

  render() {
    const { selectedOption } = this.state;
    const { studentsOfMentor } = this.state;

    return ([
      <div key='select' className='select'>
        <h3>Mentor:</h3>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          clearable
          options={options}
        />
      </div>,
      <div key='table' className='scroll-area'>
        <table className='table'>
          {studentsOfMentor}
        </table>
      </div>
    ]);
  }
}

ReactDOM.render(<MentorSelect />, document.getElementById('content'));
