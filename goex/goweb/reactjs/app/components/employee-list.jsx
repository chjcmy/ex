const React = require('react');
import Employee from './goweb/reactjs/app/components/employee.jsx'

export default class EmployeeList extends React.Component{

    render() {
		var employees = this.props.employees.map((employee, i) =>
			<Employee key={i} employee={employee}/>
		);

		return (
			<table>
				<tbody>
					<tr>
						<th>FirstName</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
