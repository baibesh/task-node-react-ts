import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TemplateList: React.FC = () => {
    const classes = useStyles();
    const {templates, error, loading} = useTypedSelector(state => state.template);
    const {fetchTemplates} = useActions();

    useEffect(() => {
        fetchTemplates()
    }, []);

    if (loading) return <h3>Идет загрузка</h3>
    if (error) return <h3>{error}</h3>

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Наименование шаблона</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {templates.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TemplateList;
