import React from 'react';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import CardLayout from 'components/CardLayout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Lucas', 'Mendes', 'lucas.mendes@gmail.com', '(32) 9 9803-2555', 4.0),
  createData('Maria', 'Mendes', 'maria.antonia@gmail.com', '(35) 9 9245-3055', 4.0),
  createData('Roberto', 'Inácio', 'roberto.inacio@gmail.com', '(37) 9 9151-4859', 4.0),
  createData('Jorge', 'Souza', 'jorge.souza@gmail.com', '(31) 9 9811-2468', 4.0),
  createData('Henrique', 'Carlos', 'henrique.carlos@gmail.com', '(32) 9 9150-3250', 4.0),
];

class CustomerPage extends React.Component {
  render() {
    return (
      <div className="app-wrapper">

        <CardLayout>
          <ContainerHeader match={this.props.match} title={"Pacientes"}/>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Sobrenome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Celular</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow>
                    <TableCell>
                      <i className="zmdi zmdi-face zmdi-hc-2x"/>
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardLayout>

      </div>
    );
  }
}

export default CustomerPage;