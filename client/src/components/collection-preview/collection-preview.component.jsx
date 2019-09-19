import React from 'react';
import {CollecitonPreviewContainer, TitleContainer, PreviewContainer} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <CollecitonPreviewContainer className="collection-preview">
        <TitleContainer className="title">{title.toUpperCase()}</TitleContainer>
        <PreviewContainer className="preview">
            {
                items
                    .filter((item, idx) => idx < 4) // show only 4
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </PreviewContainer>
    </CollecitonPreviewContainer>
);

export default CollectionPreview;