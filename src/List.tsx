import * as React from "react";

interface IProps {
  addFunction:(assignmentName: string) => void;
  currList: any;
  placeholder: string;
  title: string;
}
interface IState {
  value: any;
}

class List extends React.Component<IProps, IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <div className="col-6 mx-auto">
        {/*Replace the code below to call the title prop for step 2*/}
        <p className="h2">{this.props.title}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="form-control input-sm"
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn btn-sm" type="submit" value="Submit" />
        </form>
        <ul className="Box">
          <div className="Box-header">{this.props.title}</div>
          {this.props.currList.map((item:any, index:number) => (
            <li className="Box-row" key={index}>
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private handleChange(event:React.FormEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value });
  }

  private handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    this.setState({
      value: ""
    });

    this.props.addFunction(this.state.value);
    event.preventDefault();
  }

}

export default List;
