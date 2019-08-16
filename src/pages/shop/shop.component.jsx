import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {updateCollections} from '../../redux/shop/shot.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;
    
    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        
        // Observer/Observable Pattern
        /*this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap( snapshot );
            updateCollections( collectionsMap );
            this.setState({loading: false});
        });*/

        // Promise Pattern
        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap( snapshot );
                updateCollections( collectionsMap );
                this.setState({loading: false});
            });

        // Native Fetch API Pattern
        /*fetch('https://firestore.googleapis.com/v1/projects/crwn-db-8f52a/databases/(default)/documents/collections')
            .then(response => response.json())
            .then(collections => console.log('collections: ', collections));*/
    }

    /*componentWillUnmount(){
        this.unsubscribeFromSnapshot();
    }*/

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);