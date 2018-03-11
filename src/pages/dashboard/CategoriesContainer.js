import { connect } from 'react-redux';
import withHandlers from 'recompose/withHandlers';
import pipe from 'lodash/fp/flow';
import {
    changeTransactionsFilter,
    changeQuickDisplayFilter,
    resetQuickDisplayFilter,
} from 'modules/transactions/actions';
import Categories from './categories/Categories';


const mapStateToProps = ({ categories }) => {
    const {
        allTypes,
        typesById,
    } = categories;

    const types = allTypes.map(typeId => typesById[typeId]);

    return {
        types,
    };
};

const redux = connect(
    mapStateToProps,
    {
        changeTransactionsFilter,
        changeQuickDisplayFilter,
        resetQuickDisplayFilter,
    },
);

const handlers = withHandlers({ });

export default pipe(
    handlers,
    redux,
)(Categories);
