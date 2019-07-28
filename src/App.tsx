import * as React from "react";

import List from "./List";
import Table from "./Table";

interface IState {
  assignments: any;
  buttonClicked: any;
  grades: any;
  students: any;
}

class App extends React.Component<{},IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      assignments: [],
      buttonClicked: "",
      grades: {},
      students: []
    };

    this.addAssignment = this.addAssignment.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.handleAssignmentsButtonClicked = this.handleAssignmentsButtonClicked.bind(this);
    this.handleGradesButtonClicked = this.handleGradesButtonClicked.bind(this);
    this.handleStudentsButtonClicked = this.handleStudentsButtonClicked.bind(this);
  }

  public render() {
    let tabChoice = <div />;

    if (this.state.buttonClicked === "assignments") {
      tabChoice = (
        <List
          placeholder="Add Assignment..."
          currList={this.state.assignments}
          addFunction={this.addAssignment}
          title="Assignments"
        />
      );
    }


    if (this.state.buttonClicked === "students") {
      tabChoice = (
        <List
          placeholder="Add Student..." 
          currList={this.state.students}
          addFunction={this.addStudent}
          title="Student Roster"
        />
      );
    }

    if (this.state.buttonClicked === "grades") {
      tabChoice = (
        <Table
          tableNames={this.state.assignments}
          rows={this.state.students}
          addFunction={this.addGrade}
          data={this.state.grades}
        />
      );
    }

    return (
      <div>
        <div className="Box Box--spacious f4">
          <div className="Box-header">
            {<h3 className="Box-title d-flex flex-justify-center">GradeBook</h3>}
          </div>
        </div>
        <nav className="UnderlineNav d-flex flex-justify-center">
          <div className="UnderlineNav-body pt-6">
            <button
              className="btn btn-primary"
              onClick={this.handleAssignmentsButtonClicked}
            >
              Assignments
            </button>
            <button
              className="btn btn-primary"
              onClick={this.handleStudentsButtonClicked}
            >
              Students
            </button>
            <button
              className="btn btn-primary"
              onClick={this.handleGradesButtonClicked}
            >
              Grades
            </button>
          </div>
        </nav>
        {tabChoice}
      </div>
    );
  }

  private handleAssignmentsButtonClicked() {
    this.setState({
      buttonClicked: "assignments"
    });
  }

  private handleStudentsButtonClicked() {
    this.setState({
      buttonClicked: "students"
    });
  }

  private handleGradesButtonClicked() {
    this.setState({
      buttonClicked: "grades"
    });
  }

  /*Check out this addAssignment function for step 3*/
  private addAssignment(assignmentName: string) {
    this.setState({
      assignments: this.state.assignments.concat(assignmentName)
    });
  }

  /*Write an addStudent function here for step 3*/
  private addStudent(studentName: string) {
    this.setState( {
      students: this.state.students.concat(studentName)
    });
  }

  private addGrade(assignment: string, student: string, event: React.FormEvent<HTMLInputElement>) {
    const grades = this.state.grades;
    const assignmentName = assignment;
    const studentName = student;
    if (!(assignment in grades)) {
      grades[assignmentName] = {};
    }
    grades[assignmentName][studentName] = event.currentTarget.value;
    this.setState({grades});
  }

}

export default App;
