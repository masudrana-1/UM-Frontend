"use client"

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { store } from '@/redux/store';
import { Provider } from 'react-redux'


/***********
 * wrap by ant design
***********/

const Providers = ({ children }: { children: React.ReactNode}) => {
    return (
        <Provider store={store}>
            <AntdRegistry>{children}</AntdRegistry>
        </Provider>
    );
};

export default Providers;