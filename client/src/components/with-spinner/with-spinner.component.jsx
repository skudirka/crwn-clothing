import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <Spinner className="spinner" />
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;