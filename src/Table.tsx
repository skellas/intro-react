import * as React from "react";

interface IProps {
  addFunction: (assignment: string, student: string, event: React.FormEvent<HTMLInputElement>) => void;
  data: any;
  rows: any;
  tableNames: any;
}
interface IState {
  value: any;
}
class Table extends React.Component<IProps, IState> {
  
  public render() {
    return (
      <div>
        {this.props.tableNames.map((name: string, index: number) => (
          <div className="pt-6">
            <div className="Box col-6 mx-auto">
              <div className="Box-header Box-title">{name}</div>
              <div>{this.createRows(name)}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  private getValue(data: any, tableName: string, row: any) {
    if (tableName in data && row in data[tableName]) {
      return data[tableName][row];
    } else {
      return "Add Score";
    }
  }

  private createRows(name:string) {
    return (
      <div>
        {this.props.rows.map((row: any, index: number) => (
          <div className="Box-row d-flex flex-justify-between">
            {row}
            <input
              className="form-control input-sm"
              type="text"
              placeholder={this.getValue(this.props.data, name, row)}
              onChange={this.props.addFunction.bind(this, name, row)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Table;
