import React from 'react';
import { TopNavigation, BottomFooter, TopNavNoSearchBar} from '../utilities';


// 'children' of type *ReactNode*
interface Props{
    children: React.ReactNode;
    Search: boolean;
}

export const AppLayout: React.FC<Props> = ({children, Search}) => {
    return(
        <React.Fragment>
            {/* display Navigation with searchbar on search toggle */}
            { Search ? <TopNavigation />: <TopNavNoSearchBar /> }
                {children}
            <BottomFooter/>
        </React.Fragment>
    );
};